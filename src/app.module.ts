import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ProductModule } from './product/product.module';
//import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { SqsService } from './sqs.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/demodb?retryWrites=true&w=majority'),
    ProductModule,
    //ProductModule
  ],
  controllers: [AppController],
  providers: [AppService, SqsService],
})
export class AppModule {}
