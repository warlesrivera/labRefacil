import { Body, Controller, Get } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { EventPattern, MessagePattern } from '@nestjs/microservices/decorators';
import { CreatePersonCommand } from '../domain/commands/createPersonCommand';
import { PersonDto } from './dto/person.dto';

@Controller()
export class PersonController {
  constructor(readonly commandBus: CommandBus, readonly queryBus: QueryBus) {}

  @MessagePattern('create-person')
  async createPerson(@Body() body: any): Promise<PersonDto> {

    const command = new CreatePersonCommand(
      body.name,
      body.email,
      body.password,
      body.userId
    );
    const data = await this.commandBus.execute(command);
    return data;

  }
}
