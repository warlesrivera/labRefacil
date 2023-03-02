import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { PersonModule } from './person.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PersonModule,
    {
      transport: Transport.TCP,
      options:{host: 'localhost', port:3001}
    },
  );
  await app.listen();
}
bootstrap().then(() => console.log(`The application (person lab) `));

