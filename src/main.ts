import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3030, () :void=>{
    console.log(3030);
    
  });
}
start();
