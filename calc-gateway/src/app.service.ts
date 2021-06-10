import { IExpression } from './expression.interface';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Client, ClientProxy, ClientTCP, Transport } from '@nestjs/microservices';

@Injectable()
export class AppService {
  @Client({
    transport: Transport.TCP,
    options: { host: 'localhost', port: 4002 },
  })
  subClient: ClientTCP;

  @Client({
    transport: Transport.TCP,
    options: { host: 'localhost', port: 4003 },
  })
  sumClient: ClientTCP;

  async send(exp: IExpression): Promise<void> {
    const { op } = exp;
    if(op === '+'){
      return this.sendToSum(exp);
    } else if(op === '-'){
      return this.sendToSub(exp);
    }
    
    throw new BadRequestException('invalid-operator');
  }

  async sendToSum(exp: IExpression) {
    const { num1, num2 } = exp;
    await this.sumClient.send('sum', {num1, num2}).toPromise()
  }

  async sendToSub(exp: IExpression) {
    const { num1, num2 } = exp;
    await this.subClient.send('subtract', {num1, num2}).toPromise()
  }
}
