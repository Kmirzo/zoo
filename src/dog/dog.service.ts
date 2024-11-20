import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'WoW WoW';
  }

  public introduce(): string {
    return 'My name is Rex!';
  }

  public modifyDetail(): string {
    return 'Successfully modified!';
  }
}
