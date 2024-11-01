import { PrismaService } from '../db/db.service';
import { IOder } from '@gstore/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrderView {
  constructor(private readonly prisma: PrismaService) {}
  async getAllOrders(): Promise<IOder[]> {
    const orders = await this.prisma.order.findMany();
    return orders as any;
  }
  async getOrderById(id: number): Promise<IOder[]> {
    const order = await this.prisma.order.findUnique({
      where: { id },
      include: {
        items: {
          include: { product: { select: { id: true, name: true } } },
        },
        delivery: true,
      },
    });
    return (order as any) ?? null;
  }
  async saveOrder(order: IOder): Promise<void> {
    await this.prisma.order.create({
      data: {
        date: order.date,
        status: order.status,
        paymentMethod: order.paymentMethod,
        totalAmount: order.totalAmount,
        delivery: {
          create: { ...order.delivery },
        },
        items: {
          create: order.items.map((item) => ({
            productId: item.product.id,
            unitPrice: item.unitPrice,
            quantity: item.quantity,
          })),
        },
      },
    });
  }
  async deleteOrder(orderId: number): Promise<void> {
    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });
    if (!order) return;
    await this.prisma.$transaction([
      this.prisma.orderItem.deleteMany({ where: { orderId: orderId } }),
      this.prisma.order.delete({ where: { id: orderId } }),
      this.prisma.orderDelivery.delete({ where: { id: order.deliveryId } }),
    ]);
  }
}
