import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ProductModule } from './product/product.module';
//import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { SnsController } from './sns.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ProductModule,
  ],
  controllers: [AppController, SnsController],
  providers: [AppService],
})
export class AppModule {}
