import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Acknowledgment, AcknowledgmentDocument } from './acknowledgment.schema';
import { AcknowledgmentDTO } from './acknowledgment.dto';
import { Review, ReviewDocument } from 'src/reviews/review.schema';

@Injectable()
export class AcknowledgmentService {
  constructor(
    @InjectModel(Acknowledgment.name) private acknowledgmentModel: Model<AcknowledgmentDocument>,
    @InjectModel(Review.name) private reviewModel: Model<ReviewDocument>
  ) {}

  async create(createAcknowledgmentDto: AcknowledgmentDTO): Promise<Acknowledgment> {
    const acknowledgmentData = await this.acknowledgmentModel.create(createAcknowledgmentDto);

    await this.reviewModel.findByIdAndUpdate(
      createAcknowledgmentDto.reviewId,
      { $push: { acknowledgment: acknowledgmentData._id } },
      { new: true }
    );
    
    return acknowledgmentData;
  }

  async findAll(): Promise<Acknowledgment[]> {
    return this.acknowledgmentModel.find().exec();
  }

  async findOne(id: string): Promise<Acknowledgment> {
    const acknowledgment = await this.acknowledgmentModel.findById(id).exec();
    if (!acknowledgment) throw new NotFoundException('Acknowledgment not found');
    return acknowledgment;
  }

  async update(id: string, updateAcknowledgmentDto: AcknowledgmentDTO): Promise<Acknowledgment | null> {
    return this.acknowledgmentModel.findByIdAndUpdate(id, updateAcknowledgmentDto, { new: true });
  }

  async remove(id: string): Promise<void> {
    await this.acknowledgmentModel.findByIdAndDelete(id).exec();
  }
}
