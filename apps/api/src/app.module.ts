import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [DbModule, ProductModule],
  controllers: [AppController],
})
export class AppModule {}
