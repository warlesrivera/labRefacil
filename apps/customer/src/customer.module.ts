import { Module } from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ConfigModule.forRoot(),],
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomerModule {}
