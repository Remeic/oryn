import { Controller, Get } from '@nestjs/common';
import { SignalsService } from './signals.service';

@Controller('signals')
export class SignalsController {
  constructor(private readonly signalsService: SignalsService) {}

  @Get('ping')
  ping() {
    return this.signalsService.ping();
  }
}
