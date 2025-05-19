import { Module, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { APP_INTERCEPTOR } from '@nestjs/core';
import { logger } from './common/logger.middleware';
import { GraphQLOnlyInterceptor } from './common/graphql.interceptor';
import { TransformInterceptor } from './common/transform.interceptor';

import { ChatGateway as ChatGatewayRedis } from './websocket/redis-chat.gateway';
import { ChatGateway as ChatGatewayRabitmq } from './websocket/rabbitmq-chat.gateway';
import { RedisService } from './websocket/redis-chat.service';
import { RabbitMQService } from './websocket/rabbitmq-chat.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { ChatGateway as ChatGatewayPie } from './websocket/redis-chat-pie-chart.gateway';

import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountryModule } from './modules/country/country.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StateModule } from './modules/state/state.module';
import { DistrictModule } from './modules/district/district.module';
import { CompanyModule } from './modules/company/company.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SignalingGateway } from './signaling/signaling.gateway';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env globally

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODBURL'),
      }),
      inject: [ConfigService],
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      csrfPrevention: false, // 🔥 Disable CSRF for local testing
      //uploads: false, // handled by graphql-upload middleware in main.ts
    }),

    EventEmitterModule.forRoot(),
    RabbitMQModule.forRoot({
      exchanges: [
        {
          name: 'chat_exchange',
          type: 'fanout',
        },
        {
          name: 'number_exchange',
          type: 'fanout',
        },
        
      ],
      uri: 'amqp://localhost:5672',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // <-- path to /public
    }),



    AuthModule,
    UserModule,
    ProductModule,

    CountryModule,
    StateModule,
    DistrictModule,
    CompanyModule,
    EmployeeModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ChatGatewayRedis, RedisService, 
    ChatGatewayRabitmq, RabbitMQService, 
    ChatGatewayPie,
    SignalingGateway,
    { provide: APP_INTERCEPTOR, useClass: GraphQLOnlyInterceptor },
    { provide: APP_INTERCEPTOR, useClass: TransformInterceptor },
  ],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(logger).forRoutes('*'); // Apply middleware globally
  }
}
