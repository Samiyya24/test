import { Controller, Get, Post, Body, Patch, Param, Delete ,Query} from '@nestjs/common';
import { DevjobsService } from './devjobs.service';
import { CreateDevjobDto } from './dto/create-devjob.dto';
import { UpdateDevjobDto } from './dto/update-devjob.dto';

@Controller('devjobs')
export class DevjobsController {
  constructor(private readonly devjobsService: DevjobsService) {}

  @Get()
  findAll(@Query() query) {
    return this.devjobsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.devjobsService.findOne(+id);
  }
}
