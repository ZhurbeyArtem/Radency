import { NestFactory } from '@nestjs/core';
import { NoteModule } from './note.module';
import { ValidationPipe } from '@nestjs/common';

async function start() {
  const app = await NestFactory.create(NoteModule);
  const PORT = process.env.PORT || 5000;
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(PORT, () => console.log(`server started on ${PORT}`));
}
start();
