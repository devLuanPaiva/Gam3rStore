import { DbModule } from '../db/db.module';
import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderView } from './order.view';

@Module({
  imports: [DbModule],
  controllers: [OrderController],
  providers: [OrderView],
})
export class OrderModule {}
