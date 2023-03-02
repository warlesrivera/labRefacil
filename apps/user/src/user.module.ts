import { Module } from '@nestjs/common';
import { UserRepositoryService } from './infrastructure/repositories/userRepository';
import { UserController } from './interfaces/user.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { GetUserQueryHandler } from './domain/queries/getUserHandler';

const application = [GetUserQueryHandler];

const infrastructure = [UserRepositoryService];
@Module({
  imports: [CqrsModule],
  controllers: [UserController],
  providers: [...application, ...infrastructure],
})
export class UserModule {}
