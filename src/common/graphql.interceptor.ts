// logging.interceptor.ts for graphQL
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable()
export class GraphQLOnlyInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (context.getType<'graphql'>() !== 'graphql') {
      return next.handle(); // skip non-GraphQL
    }

    const gqlCtx  = GqlExecutionContext.create(context);
    const info    = gqlCtx.getInfo();
    const now     = Date.now();
    
    console.log(`\n\n------------------------- Intercepting GraphQL field: ${info.fieldName} ----------`);
    return next.handle().pipe(
            tap(() =>
              console.log(`Execution time: ${Date.now() - now}ms`),
            )
          );;
  }
}
