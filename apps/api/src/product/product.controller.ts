import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { IProduct } from '@gstore/core';

@Controller('products')
export class ProductController {
  constructor(private readonly repo: ProductService) {}
  @Post('create')
  save(@Body() product: IProduct): Promise<void> {
    return this.repo.save(product);
  }
  @Get('getAll')
  getAll(): Promise<IProduct[]> {
    return this.repo.getProducts();
  }
  @Get('getById/:id')
  getById(@Param('id') id: number): Promise<IProduct> {
    return this.repo.getById(+id);
  }
  @Delete('delete/:id')
  deleteById(@Param('id') id: number): Promise<void> {
    return this.repo.deleteById(+id);
  }
}
