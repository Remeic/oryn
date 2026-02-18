import { Injectable } from '@nestjs/common';
import type { CreateSignalInput } from './schemas/create-signal.schema';

export type Signal = CreateSignalInput & {
  id: string;
  createdAt: string;
};

@Injectable()
export class SignalsService {
  private readonly items: Signal[] = [];

  ping() {
    return { ok: true };
  }

  create(input: CreateSignalInput): Signal {
    const signal: Signal = {
      ...input,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    this.items.unshift(signal);
    return signal;
  }

  findAll(): Signal[] {
    return this.items;
  }
}
