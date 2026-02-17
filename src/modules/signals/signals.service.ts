import { Injectable } from '@nestjs/common';

@Injectable()
export class SignalsService {
  ping() {
    return { ok: true };
  }
}
