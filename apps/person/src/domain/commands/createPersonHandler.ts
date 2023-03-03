import { Inject, OnModuleInit } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ClientGrpc, ClientProxy } from '@nestjs/microservices';
import { PersonRepositoryService } from '../../infrastrcture/repositories/person.repository';
import { PersonDto } from '../../interface/dto/person.dto';
import { CreatePersonCommand } from './createPersonCommand';
import { lastValueFrom } from 'rxjs';
import { CustomerProtoService } from '../../proto/customer.pb';

@CommandHandler(CreatePersonCommand)
export class CreatePersonHandler
  implements ICommandHandler<CreatePersonCommand, PersonDto>, OnModuleInit
{
  private srv: CustomerProtoService;
  constructor(
    private readonly personRepositoryService: PersonRepositoryService,
    @Inject('SERVICE_USER') private clientPerson: ClientProxy,
    @Inject('CUSTOMER_TRANSPORT') private clientCustomer: ClientGrpc,
  ) {}

  /* -------------------- init module */
  onModuleInit() {
    this.srv = this.clientCustomer.getService<CustomerProtoService>('CustomerProtoService');
  }
  /* -------------------- end init module */

  async execute(command: CreatePersonCommand): Promise<any> {
    const data: PersonDto = {
      name: command.name,
      email: command.email,
      address: command.address,
    };
    const res = await this.personRepositoryService.createPerson(data);

    const resUser = await lastValueFrom(
      await this.clientPerson.send('get-user', command.userId),
    );
    const customer = await lastValueFrom(await this.srv.getCustomers({}));
    return { person: res, user: resUser, customer: customer };
  }
}
