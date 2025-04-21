import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ResolutionService } from './resolution.service';
import { ResolutionController } from './resolution.controller';
import { Resolution, ResolutionSchema } from './resolution.schema';
import { Acknowledgment, AcknowledgmentSchema } from 'src/acknowledgments/acknowledgment.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Resolution.name, schema: ResolutionSchema },
    { name: Acknowledgment.name, schema: AcknowledgmentSchema }
  ])],
  controllers: [ResolutionController],
  providers: [ResolutionService],
})
export class ResolutionModule {}
