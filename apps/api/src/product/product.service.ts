import { IProduct } from '@gstore/core';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/db.service';

@Injectable()
export class ProductService {
  constructor(readonly prisma: PrismaService) {}
  async save(product: IProduct): Promise<void> {
    await this.prisma.product.upsert({
      where: { id: product.id ?? -1 },
      update: product,
      create: product,
    });
  }
  async getProducts(): Promise<IProduct[]> {
    const product = await this.prisma.product.findMany();
    return product as any;
  }

  async getById(id: number): Promise<IProduct | null> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    return (product as any) ?? null;
  }
  async deleteById(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }
}
