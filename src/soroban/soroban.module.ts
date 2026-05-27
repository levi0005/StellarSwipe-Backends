import { Module } from '@nestjs/common';
import { SorobanService } from './soroban.service';
import { StellarConfigService } from '../config/stellar.service';
import { AlertsModule } from '../monitoring/alerts/alerts.module';

@Module({
  imports: [AlertsModule],
  providers: [SorobanService, StellarConfigService],
  exports: [SorobanService],
})
export class SorobanModule {}
