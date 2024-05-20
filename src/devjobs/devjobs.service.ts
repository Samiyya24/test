import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
const express = require('express');

@Injectable()
export class DevjobsService {
  findAll(res) {
    const data = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), 'src', 'model', 'data.json'),
        'utf-8',
      ),
    );
  
    res.send(data);
  }

  findOne(id: number) {
    const data = JSON.parse(
      fs.readFileSync(
        path.join(process.cwd(), 'src', 'model', 'data.json'),
        'utf-8',
      ),
    );

    const newData = data.find((e) => e.id == id);

    if (!newData) {
      return 'Devjobs not found';
    }
    return newData;
  }
}
