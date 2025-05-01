import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { SnsController } from './sns.controller';
import { SnsService } from './sns.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/demodb?retryWrites=true&w=majority'),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService, SnsService ],
})
export class AppModule {}
