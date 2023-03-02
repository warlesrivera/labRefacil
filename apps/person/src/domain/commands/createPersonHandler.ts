import { Inject } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ClientProxy } from '@nestjs/microservices';
import { PersonRepositoryService } from '../../infrastrcture/repositories/person.repository';
import { PersonDto } from '../../interface/dto/person.dto';
import { CreatePersonCommand } from './createPersonCommand';
import { lastValueFrom } from 'rxjs';

@CommandHandler(CreatePersonCommand)
export class CreatePersonHandler
  implements ICommandHandler<CreatePersonCommand, PersonDto>
{
  constructor(
    private readonly personRepositoryService: PersonRepositoryService,
    @Inject('SERVICE_USER') private clientPerson: ClientProxy,
  ) {}
  async execute(command: CreatePersonCommand): Promise<any> {
    const data: PersonDto = {
      name: command.name,
      email: command.email,
      address: command.address,
    };
    const res = await this.personRepositoryService.createPerson(data);

    const proxUSer = await this.clientPerson.send('get-user', command.userId);
     const resUser = await lastValueFrom(proxUSer)
    return { person: res, user: resUser };
  }
}
