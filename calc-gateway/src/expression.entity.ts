import { IExpression } from './expression.interface';
import { ApiProperty } from '@nestjs/swagger';

export class ExpressionEntity implements IExpression {
  @ApiProperty({ example: 3, description: 'number 1' })
  num1: number;

  @ApiProperty({ example: '+', description: 'operator' })
  op: string;

  @ApiProperty({ example: 2, description: 'number 2' })
  num2: number;
}