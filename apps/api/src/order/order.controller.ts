import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrderView } from './order.view';
import { IOder } from '@gstore/core';

@Controller('api/orders')
export class OrderController {
  constructor(private readonly repo: OrderView) {}

  @Post()
  async createOrder(@Body() orderData: IOder) {
    await this.repo.saveOrder(orderData);
  }
  @Get()
  async getAllOrders() {
    return this.repo.getAllOrders();
  }
  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return this.repo.getOrderById(+id);
  }
  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {
    await this.repo.deleteOrder(+id);
  }
}
