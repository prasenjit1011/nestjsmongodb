import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ProductModule } from './product/product.module';
//import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
//import { AuthController } from './auth/auth.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://tester:tester1234@cluster0.hlicuim.mongodb.net/demodb?retryWrites=true&w=majority'),
    ProductModule,
    AuthModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    //ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
