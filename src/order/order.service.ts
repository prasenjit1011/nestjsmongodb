import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from './order.schema';
import { CreateOrderDTO } from './order.dto';
import { User, UserDocument } from 'src/users/users.schema';
import { populate } from 'dotenv';
import path from 'path';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>
  ) {}

  async create(createOrderDto: CreateOrderDTO): Promise<Order> {
    const orderData = await this.orderModel.create(createOrderDto);    
    const userData  = await this.userModel.findByIdAndUpdate(createOrderDto.userId, { $push: { orders: orderData._id } });

    return orderData;
  }

  async findAll(): Promise<Order[]> {

    console.clear();
    console.log('--here--');
    return this.orderModel
                .find()
                .populate({
                  path: 'userId'
                })
                .populate({
                  path:'products',
                  populate: { 
                    path: 'productId',
                    populate: {
                      path: 'reviews',
                      populate: {
                        path: 'acknowledgment',
                        populate: {
                          path: 'resolution'
                        }
                      }
                    }
                  }
                })
                .exec();
  }

  async findOne(id: string): Promise<Order> {
    const order = await this.orderModel.findById(id).select('_id userId products totalAmount status').exec();
    if (!order) throw new NotFoundException('Order not found');
    return order;
  }

  async update(id: string, updateOrderDto: CreateOrderDTO): Promise<Order|null> {
    return this.orderModel.findByIdAndUpdate(id, updateOrderDto, { new: true });
  }

  async remove(id: string): Promise<void> {
    await this.orderModel.findByIdAndDelete(id).exec();
  }
}
