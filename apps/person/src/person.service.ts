import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonService {
  storePerson(): string {
    return 'Hello World!';
  }
}
