// src/recordings/recordings.controller.ts
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as path from 'path';

@Controller('recordings')
export class RecordingsController {



  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadRecording(@UploadedFile() file: Express.Multer.File) {
    const savePath = path.join(__dirname, '../../recordings');
    if (!fs.existsSync(savePath)) {
      fs.mkdirSync(savePath);
    }

    const filename = `${Date.now()}.webm`;
    fs.writeFileSync(path.join(savePath, filename), file.buffer);

    return { success: true, filename };
  }
}
