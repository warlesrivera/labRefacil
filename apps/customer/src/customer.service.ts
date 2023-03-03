import { Injectable } from '@nestjs/common';
import { Customer } from './customers.pb';

@Injectable()
export class CustomerService {
  async getAllCustomers(): Promise<Customer[]> {
    const items: Customer[] = [
      {
        id: 1,
        name: 'string',
        address: 'string',
        phone: 'string',
        personPrincipal: 'string'
      },
      {
        id: 2,
        name: 'string',
        address: 'string',
        phone: 'string',
        personPrincipal: 'string'
      },
      {
        id: 3,
        name: 'string',
        address: 'string',
        phone: 'string',
        personPrincipal: 'string'
      }
    ];
    return items;
  }
}
