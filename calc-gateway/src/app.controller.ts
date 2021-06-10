import { ExpressionEntity } from './expression.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('calc')
  async exec(
    @Body() exp: ExpressionEntity,
  ): Promise<void> {
    return this.appService.send(exp);
  }
}
