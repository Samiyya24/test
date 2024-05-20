import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { QueryDto } from './dto/query.dto';
import { IDevJobs, IResponse } from './interface';

@Injectable()
export class DevjobsService {
  findAll(query?: QueryDto): IResponse {
    const page = +query?.page || 1;
    const limit = +query?.limit || 5;
    const search = query?.search || '';

    const devJobs: IDevJobs[] = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), 'src', 'model', 'data.json'),
        'utf-8',
      ),
    ).filter(
      (item: IDevJobs) =>
        item.contract.includes(search) ||
        item.location.includes(search) ||
        item.position.includes(search),
    );

    const totalPage = Math.ceil(devJobs.length / limit);
    const skip = (page - 1) * limit; // 5

    const keys = Object.keys(query);
    const keyValuePairs = keys
      .map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(query[key]);
      })
      .join('&');

    return {
      data: devJobs.slice(skip, limit + skip),
      totalPage: totalPage,
      next: page < totalPage ? `/${keyValuePairs}` : undefined,
    };
  }

  findOne(id: string): IDevJobs | { message: string } {
    const devJobs: IDevJobs[] = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), 'src', 'model', 'data.json'),
        'utf-8',
      ),
    );

    const devJob = devJobs.find((devJob: IDevJobs) => devJob.id === +id);

    if (!devJob) {
      return {
        message: 'Devjobs not found',
      };
    }
    return devJob;
  }
}
