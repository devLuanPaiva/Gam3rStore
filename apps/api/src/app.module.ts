import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [DbModule, OrderModule, ProductModule],
  controllers: [AppController],
})
export class AppModule {}
