import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/create-person')
  getHello(@Body() body:any): string {
    return this.authService.createPerson(body);
  }
}
