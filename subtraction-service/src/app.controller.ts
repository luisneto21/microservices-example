import { Controller, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('subtract')
  subtract(nums: { num1: number, num2: number }): void {
    const { num1, num2 } = nums;
    Logger.log(`Result ${num1} - ${num2} = ${num1 - num2}`, 'Subtraction')
  }
}
