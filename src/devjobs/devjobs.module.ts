import { Module } from '@nestjs/common';
import { DevjobsService } from './devjobs.service';
import { DevjobsController } from './devjobs.controller';

@Module({
  controllers: [DevjobsController],
  providers: [DevjobsService],
})
export class DevjobsModule {}
