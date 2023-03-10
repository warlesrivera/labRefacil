import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CreatePersonHandler } from './domain/commands/createPersonHandler';
import { PersonRepositoryService } from './infrastrcture/repositories/person.repository';
import { PersonController } from './interface/person.controller';

const application = [CreatePersonHandler];

const infrastructure = [PersonRepositoryService];
@Module({
  imports: [
    CqrsModule,
    ClientsModule.register([
      {
        name: 'SERVICE_USER',
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [PersonController],
  providers: [...application, ...infrastructure],
})
export class PersonModule {}
