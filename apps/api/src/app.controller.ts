import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('ping')
  ping(): string {
    return 'pong';
  }
}
