import { ICommand } from '@nestjs/cqrs';

export class CreatePersonCommand implements ICommand {
  constructor( readonly id: number ) {}
}