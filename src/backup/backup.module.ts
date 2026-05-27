import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { BackupService } from './backup.service';
import { BackupVerificationService } from './backup-verification.service';
import { DatabaseBackupJob } from './jobs/database-backup.job';
import { BackupCleanupJob } from './jobs/backup-cleanup.job';

@Module({
  imports: [ConfigModule, ScheduleModule.forRoot()],
  providers: [BackupService, BackupVerificationService, DatabaseBackupJob, BackupCleanupJob],
  exports: [BackupService, BackupVerificationService],
})
export class BackupModule {}
