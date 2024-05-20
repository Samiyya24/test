import { Controller, Get, Param, Query } from '@nestjs/common';
import { DevjobsService } from './devjobs.service';
import { QueryDto } from './dto/query.dto';

@Controller('/')
export class DevjobsController {
  constructor(private readonly devjobsService: DevjobsService) {}

  @Get()
  findAll(@Query() query: QueryDto) {
    return this.devjobsService.findAll(query);
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.devjobsService.findOne(id);
  }
}
