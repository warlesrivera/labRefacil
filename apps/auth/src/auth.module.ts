import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices/module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_PERSON', transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 3001
        }
      }
    ])
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
