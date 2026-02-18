import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignalsModule } from './modules/signals/signals.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [SignalsModule],
})
export class AppModule {}
