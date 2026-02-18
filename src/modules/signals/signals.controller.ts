import { Controller, Get, Post, Body } from '@nestjs/common';
import { SignalsService } from './signals.service';
import { CreateSignalSchema } from './schemas/create-signal.schema';
import type { CreateSignalInput } from './schemas/create-signal.schema';
import { ZodBody } from 'src/decorators/decorators';

@Controller('signals')
export class SignalsController {
  constructor(private readonly signalsService: SignalsService) {}

  @Get('ping')
  ping() {
    return this.signalsService.ping();
  }

  @Post()
  create(@ZodBody(CreateSignalSchema) input: CreateSignalInput) {
    return this.signalsService.create(input);
  }

  @Get('find-all')
  findAll() {
    return this.signalsService.findAll();
  }
}
