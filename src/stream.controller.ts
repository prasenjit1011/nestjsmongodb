import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { createReadStream, statSync } from 'fs';
import { join } from 'path';
import { Readable } from 'stream';

@Controller('stream')
export class StreamController {

    @Get('file')
    streamFile(@Res() res: Response) {
        const filePath = join(__dirname, '..', 'sample.txt');
        const fileStream = createReadStream(filePath);

        res.set({
            'Content-Type': 'text/plain',
            'Content-Disposition': 'attachment; filename="sample.txt"',
        });

        fileStream.pipe(res);
    }

    @Get('json')
    streamJson(@Res() res: Response) {
        const stream = new Readable({
            read() {
                for (let i = 1; i <= 5; i++) {
                    this.push(JSON.stringify({ id: i, message: `Hello ${i}` }) + '\n');
                }
                this.push(null); // End stream
            },
        });

        res.setHeader('Content-Type', 'application/json');
        stream.pipe(res);
    }

    @Get('video')
    streamVideo(@Req() req: Request, @Res() res: Response) {
        const videoPath = join(__dirname, '..', 'video.mp4');
        const videoStat = statSync(videoPath);
        const fileSize  = videoStat.size;

        const range = req.headers.range;
        if (!range) {
            res.status(400).send('Range header is required');
            return;
        }

        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

        const chunkSize = end - start + 1;
        const videoStream = createReadStream(videoPath, { start, end });

        res.writeHead(206, {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunkSize,
            'Content-Type': 'video/mp4',
        });

        videoStream.pipe(res);
    }
}
