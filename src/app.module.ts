import { Module } from '@nestjs/common';
import { DevjobsModule } from './devjobs/devjobs.module';

@Module({
  imports: [DevjobsModule],

})
export class AppModule {}
