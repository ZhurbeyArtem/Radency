import { NestFactory } from '@nestjs/core';
import { NoteModule } from './note.module';
import { ValidationPipe } from '@nestjs/common';

async function start() {
  const app = await NestFactory.create(NoteModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000, () => console.log('server started'));
}
start();
