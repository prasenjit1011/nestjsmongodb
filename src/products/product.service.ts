import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';
import { CreateProductDTO } from './product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

  async create(createProductDto: CreateProductDTO): Promise<Product> {
    return this.productModel.create(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().select('_id name price images').populate('reviews').exec();
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productModel.findById(id).select('_id name price images').populate('reviews').exec();
    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  async update(id: string, updateProductDto: CreateProductDTO): Promise<Product|null> {
    return this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true });
  }

  async remove(id: string): Promise<void> {
    await this.productModel.findByIdAndDelete(id).exec();
  }
}
