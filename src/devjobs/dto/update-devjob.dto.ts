import { PartialType } from '@nestjs/mapped-types';
import { CreateDevjobDto } from './create-devjob.dto';

export class UpdateDevjobDto extends PartialType(CreateDevjobDto) {}
