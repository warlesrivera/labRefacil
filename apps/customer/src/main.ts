import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { CustomerModule } from './customer.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(CustomerModule, {
    transport: Transport.GRPC,
    options: {
      package: 'customer',
      protoPath: join(__dirname, './customer.proto'),
      url:'localhost:3002'
    }
  });
  await app.listen();
}
bootstrap().then(() => console.log(`The application (customer Grpc lab) `));
