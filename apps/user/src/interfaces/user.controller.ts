import { Body, Controller } from '@nestjs/common';
import {  QueryBus } from '@nestjs/cqrs';
import { MessagePattern } from '@nestjs/microservices';
import { GetUserQuery } from '../domain/queries/getUserQuery';

@Controller()
export class UserController {
  constructor(readonly queryBus: QueryBus) {}

  @MessagePattern('get-user')
  async getUserById(@Body() id: number): Promise<any> {
   
    return this.queryBus.execute(new GetUserQuery(id));
  }
}
