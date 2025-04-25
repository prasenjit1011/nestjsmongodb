import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Player } from './player/player.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { PlayerModule } from './player/player.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: true,
      entities: [Player],
      synchronize: true,
      extra: {
        connectionLimit: 10,
      },
    }),
    MongooseModule.forRoot('mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/demodb?retryWrites=true&w=majority'),
    ProductModule,
    PlayerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
