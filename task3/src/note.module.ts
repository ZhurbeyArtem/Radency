import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Notes } from './notes.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Notes]),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Notes],
      autoLoadModels: true,
    }),
  ],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
