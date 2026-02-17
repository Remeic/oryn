import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private n = 0;

  getN() {
    return this.n;
  }

  ping() {
    return this.n++;
  }

  getHello(): string {
    return 'Hello World!';
  }
}
