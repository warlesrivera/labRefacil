import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomerService {
  async getAllCustomers() {
    const items = [
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
    return {
      page : 1,
      limit: 3,
      data: items
    };
  }
}
