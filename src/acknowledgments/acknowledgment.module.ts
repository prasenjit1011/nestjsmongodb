import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AcknowledgmentService } from './acknowledgment.service';
import { AcknowledgmentController } from './acknowledgment.controller';
import { Acknowledgment, AcknowledgmentSchema } from './acknowledgment.schema';
import { Review, ReviewSchema } from 'src/reviews/review.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Acknowledgment.name, schema: AcknowledgmentSchema },
    { name: Review.name, schema: ReviewSchema }
  ])],
  controllers: [AcknowledgmentController],
  providers: [AcknowledgmentService],
})
export class AcknowledgmentModule {}
