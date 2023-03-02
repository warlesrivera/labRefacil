import { ICommand } from '@nestjs/cqrs';

export class CreatePersonCommand implements ICommand {
  constructor(
    readonly name: string,
    readonly email: string,
    readonly address: string,
    readonly userId: number,
  ) {}
}