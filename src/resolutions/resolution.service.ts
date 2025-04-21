import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Resolution, ResolutionDocument } from './resolution.schema';
import { ResolutionDTO } from './resolution.dto';
import { Acknowledgment, AcknowledgmentDocument } from 'src/acknowledgments/acknowledgment.schema';


@Injectable()
export class ResolutionService {
  constructor(
    @InjectModel(Resolution.name) private resolutionModel: Model<ResolutionDocument>,
    @InjectModel(Acknowledgment.name) private acknowledgmentModel: Model<AcknowledgmentDocument>
  ) {}

  async create(createResolutionDto: ResolutionDTO): Promise<Resolution> {
    const resolutionData = await this.resolutionModel.create(createResolutionDto);

    await this.acknowledgmentModel.findByIdAndUpdate(
      createResolutionDto.acknowledgmentId,
      { $push: { resolution: resolutionData._id } },
      { new: true }
    );

    return resolutionData;
  }

  async findAll(): Promise<Resolution[]> {
    return this.resolutionModel.find().exec();
  }

  async findOne(id: string): Promise<Resolution> {
    const resolution = await this.resolutionModel.findById(id).exec();
    if (!resolution) throw new NotFoundException('FAQ not found');
    return resolution;
  }

  async update(id: string, updateResolutionDto: ResolutionDTO): Promise<Resolution | null> {
    return this.resolutionModel.findByIdAndUpdate(id, updateResolutionDto, { new: true });
  }

  async remove(id: string): Promise<void> {
    await this.resolutionModel.findByIdAndDelete(id).exec();
  }
}
