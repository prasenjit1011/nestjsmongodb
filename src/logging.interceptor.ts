// logging.interceptor.ts
import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  
  @Injectable()
  export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      console.log('Request started...');
      const now = Date.now();
  
      return next.handle().pipe(
        tap(() => console.log(`Request ended... ${Date.now() - now}ms`)),
      );
    }
  }
  



  import { map } from 'rxjs/operators';
  
  @Injectable()
  export class ResponseDateInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      return next.handle().pipe(
        map((data) => ({
          ...data,
          timestamp: new Date().toISOString(),  // Add response date
        })),
      );
    }
  }
  


  import {
    Catch,
    ExceptionFilter,
    ArgumentsHost,
    HttpException,
  } from '@nestjs/common';
  
  @Catch(HttpException)
  export class ResponseErrorDateFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const response = host.switchToHttp().getResponse();
      const status = exception.getStatus();
      const message = exception.message;
  
      response.status(status).json({
        message,
        timestamp: new Date().toISOString(),  // Add timestamp to error response
      });
    }
  }