import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { UserRepositoryService } from '../../infrastructure/repositories/userRepository';
import { GetUserQuery } from './getUserQuery';

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery, any> {
  constructor(private readonly userRepositoryService: UserRepositoryService) {}

  async execute(command: GetUserQuery): Promise<any> {

    const res = await this.userRepositoryService.getUserByID(command.id);
    return res;
  }
}
