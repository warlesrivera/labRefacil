import { Injectable } from '@nestjs/common';
import { PersonDto } from '../../interface/dto/person.dto';


@Injectable()
export class PersonRepositoryService {
  constructor() {}

  async createPerson(person: PersonDto):Promise<PersonDto>  {
    return {
      name: 'test',
      email: 'data@example.com',
      address: 'cll32...',
    };
  }
}
