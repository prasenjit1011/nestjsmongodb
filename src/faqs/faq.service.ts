import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Faq, FaqDocument } from './faq.schema';
import { FaqDTO } from './faq.dto';

@Injectable()
export class FaqService {
  constructor(@InjectModel(Faq.name) private faqModel: Model<FaqDocument>) {}

  async create(createFaqDto: FaqDTO): Promise<Faq> {
    return this.faqModel.create(createFaqDto);
  }

  async findAll(): Promise<Faq[]> {
    return this.faqModel.find().select('_id question answer').exec();
  }

  async findOne(id: string): Promise<Faq> {
    const faq = await this.faqModel.findById(id).exec();
    if (!faq) throw new NotFoundException('FAQ not found');
    return faq;
  }

  async update(id: string, updateFaqDto: FaqDTO): Promise<Faq | null> {
    return this.faqModel.findByIdAndUpdate(id, updateFaqDto, { new: true });
  }

  async remove(id: string): Promise<void> {
    await this.faqModel.findByIdAndDelete(id).exec();
  }
}
