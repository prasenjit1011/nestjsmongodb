// src/product/product.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.schema';
import { CreateProductDto } from './product-create.dto';
import { UpdateProductDto } from './product-update.dto';

import { SQSClient, SendMessageCommand, ReceiveMessageCommand, DeleteMessageCommand } from "@aws-sdk/client-sqs";

@Injectable()
export class ProductRepository {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }
 
  
  async myProd() {
    const sqs = new SQSClient({ region: "us-east-1" });
  
    const command = new ReceiveMessageCommand({
      QueueUrl: "https://sqs.us-east-1.amazonaws.com/466015320752/lambdaproductcreate.fifo",
      MaxNumberOfMessages: 2,
      WaitTimeSeconds: 5, // Optional: Long polling
    });
  
    const response = await sqs.send(command);
  
    if (response.Messages && response.Messages.length > 0) {
      const message = response.Messages[0];
      const body = JSON.parse(message.Body);
  
      // Delete message after processing
      // await sqs.send(new DeleteMessageCommand({
      //   QueueUrl: "https://sqs.us-east-1.amazonaws.com/466015320752/lambdaproductcreate.fifo",
      //   ReceiptHandle: message.ReceiptHandle,
      // }));
  
      return body;
    } else {
      return { message: "No messages in the myqueue... 123 : "+(new Date).getMilliseconds(), response};
    }
  }
 

  async findAll(): Promise<Product[]> {    

    let prod = {
      name: "Test Product 001 : "+(new Date).getMilliseconds(),
      price: 999,
      description: "A demo item",
    }

    const command = new SendMessageCommand({
      QueueUrl: "https://sqs.us-east-1.amazonaws.com/466015320752/lambdaproductcreate.fifo",
      MessageBody: JSON.stringify(prod),
      MessageGroupId: "product-group-1"
    });
    const sqs = new SQSClient({ region: "us-east-1" });
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
