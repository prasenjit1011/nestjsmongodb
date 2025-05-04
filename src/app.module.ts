// app.module.ts
import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { MetricsController } from './metrics.controller';
import { makeCounterProvider } from '@willsoto/nestjs-prometheus';

@Module({
  imports: [PrometheusModule.register()],
  controllers: [MetricsController],
  providers: [
    makeCounterProvider({
      name: 'http_requests_total',
      help: 'Total number of HTTP requests',
    }),
  ],
})
export class AppModule {}













// // app.module.ts
// import { Module } from '@nestjs/common';
// import { PrometheusModule } from '@willsoto/nestjs-prometheus';
// import { MetricsController } from './metrics.controller';
// import { makeCounterProvider } from '@willsoto/nestjs-prometheus';

// @Module({
//   imports: [PrometheusModule.register()],
//   controllers: [MetricsController],
//   providers: [
//     makeCounterProvider({
//       name: 'http_requests_total',
//       help: 'Total number of HTTP requests',
//     }),
//   ],
// })
// export class AppModule {}




// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { MetricsController } from './metrics.controller';
// //import { PrometheusModule } from '@willsoto/nestjs-prometheus';
// import { PrometheusModule } from 'nestjs-prometheus';




// @Module({
//   imports: [PrometheusModule.register({})],
//   controllers: [MetricsController, AppController],
//   providers: [AppService],
// })
// export class AppModule {}


// // app.module.ts
// import { Module } from '@nestjs/common';
// import { PrometheusModule } from '@willsoto/nestjs-prometheus';
// import { MetricsController } from './metrics.controller';

// @Module({
//   imports: [PrometheusModule.register()],
//   controllers: [MetricsController],
// })
// export class AppModule {}
