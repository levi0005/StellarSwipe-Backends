import { Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { SorobanMonitoringService } from './soroban-monitoring.service';
import { AlertNotificationService } from './alert-notification.service';

@Module({
  imports: [EventEmitterModule],
  providers: [SorobanMonitoringService, AlertNotificationService],
  exports: [SorobanMonitoringService, AlertNotificationService],
})
export class AlertsModule {}