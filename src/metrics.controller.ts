import { Controller, Get } from '@nestjs/common';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';

@Controller('metrics/track')
export class MetricsController {
  constructor(
    @InjectMetric('http_requests_total') private counter: Counter,
  ) {}

  @Get()
  track(): string {
    this.counter.inc();
    return 'Request counted!';
  }
}











// // metrics.controller.ts
// import { Controller, Get } from '@nestjs/common';
// import { InjectMetric } from '@willsoto/nestjs-prometheus';
// import { Counter } from 'prom-client';

// @Controller('metrics')
// export class MetricsController {
//   constructor(
//     @InjectMetric('http_requests_total') private readonly counter: Counter,
//   ) {}

//   @Get()
//   track(): string {
//     this.counter.inc(); // increment counter
//     return 'Metric increased!';
//   }
// }



// import { Controller, Get } from '@nestjs/common';
// import { PrometheusService } from '@willsoto/nestjs-prometheus';


// @Controller('metrics')
// export class MetricsController {
//   constructor(private readonly promService: PrometheusService ) {}

//   @Get()
//   getMetrics(): Promise<string> {
//     return this.promService.getMetrics();
//   }
// }

// // metrics.controller.ts
// import { Controller, Get } from '@nestjs/common';
// import { InjectMetric } from '@willsoto/nestjs-prometheus';
// import { Counter } from 'prom-client';

// @Controller('metrics')
// export class MetricsController {
//   constructor(
//     @InjectMetric('http_requests_total') private readonly counter: Counter<string>,
//   ) {}

//   @Get()
//   getMetrics(): string {
//     this.counter.inc(); // increment the counter
//     return 'Metrics counted!';
//   }
// }
