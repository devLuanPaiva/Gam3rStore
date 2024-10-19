import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  providers: [ProductService],
  controllers: [ProductController],
})
export class ProductModule {}
