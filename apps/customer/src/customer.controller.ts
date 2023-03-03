import { Controller, Get } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CustomerService } from './customer.service';

@Controller()
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @GrpcMethod('CustomerProtoService', 'GetCustomers')
  getAll(){
    return this.customerService.getAllCustomers();
  }
}
