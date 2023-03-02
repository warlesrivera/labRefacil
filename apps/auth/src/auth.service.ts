import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {

  constructor(@Inject('SERVICE_PERSON') private clientPerson: ClientProxy ) {

  }
  
  createPerson(dataPerson: any): any {
    const res = this.clientPerson.send('create-person',dataPerson)
    return res;
  }
}
