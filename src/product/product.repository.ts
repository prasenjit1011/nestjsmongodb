// src/product/product.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';
import { CreateProductDto } from './product-create.dto';
import { UpdateProductDto } from './product-update.dto';

import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";



@Injectable()
export class ProductRepository {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }
 
  async findAll(): Promise<Product[]> {    

    let prod = {
      name: "Test Product 001",
      price: 999,
      description: "A demo item",
    }

    const command = new SendMessageCommand({
      QueueUrl: "https://sqs.us-east-1.amazonaws.com/466015320752/lambdaproductcreate.fifo",
      MessageBody: JSON.stringify(prod),
    });
    const sqs = new SQSClient({ region: "ap-south-1" });
    await sqs.send(command);

    
    return this.productModel.find().select('name').exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, updateProductDto, { new: true }).exec();
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }
}
