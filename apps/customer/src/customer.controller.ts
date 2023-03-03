import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CustomerService } from './customer.service';
import { Customer } from './customers.pb';

@Controller()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @GrpcMethod('HeroesService', 'getAll')
  getAll(): Promise<Customer[]> {
    return this.customerService.getAllCustomers();
  }
}
