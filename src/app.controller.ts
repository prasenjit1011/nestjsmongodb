import { Controller, Get, Req, Res, } from '@nestjs/common';
import { Request, Response } from 'express';
import { RabbitMQService } from './websocket/rabbitmq-chat.service';
import { AppService } from './app.service';
import * as fs from 'fs';
import * as path from 'path';


@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private rabbit: RabbitMQService
  ) {}

  @Get()
  getHello(){
    let randNum = 'Random : '+(new Date).getMilliseconds();
    this.rabbit.publishRandNumber(randNum);
    return {"mymsg":randNum};
  }

  @Get('video')
  streamVideo(@Req() req: Request, @Res() res: Response) {

  const videoPath = path.join(__dirname, '../../../video/v1.mp4');
  console.log(videoPath);

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      const CHUNK_SIZE = 1024 * 1024; // 1MB
      const parts = range.replace(/bytes=/, '').split('-');
      const start = parseInt(parts[0], 10);
      const end = Math.min(start + CHUNK_SIZE - 1, fileSize - 1);
      const chunkSize = end - start + 1;

      const file = fs.createReadStream(videoPath, { start, end });

      res.writeHead(206, {
        'Content-Range': `bytes ${start}-${end}/${fileSize}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkSize,
        'Content-Type': 'video/mp4',
      });

      const dtd = new Date();
      console.log(`${dtd.getMinutes()}:${dtd.getSeconds()} bytes ${start}-${end}/${fileSize}`);
      console.log(parts);

      file.pipe(res);
    } else {
      res.writeHead(200, {
        'Content-Length': fileSize,
        'Content-Type': 'video/mp4',
      });

      fs.createReadStream(videoPath).pipe(res);
    }
  }
}
