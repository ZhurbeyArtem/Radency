import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { NoteCreateDto, NoteDto, NoteUpdateDto } from './dto/note.dto';
import { IStats } from './interface/statistic.interface';

@Controller('notes')
export class NoteController {
  constructor(private readonly appService: NoteService) {}

  @Get('/stats')
  async getStats(): Promise<IStats> {
    return await this.appService.getStats();
  }

  @Get()
  async getAll(): Promise<NoteDto[]> {
    return await this.appService.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<NoteDto> {
    return this.appService.getOne(id);
  }

  @Delete('/:id')
  async noteDelete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    return await this.appService.noteDel(id);
  }

  @Patch('/:id')
  async noteUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: NoteUpdateDto,
  ): Promise<NoteDto> {
    return await this.appService.noteUpdate(id, dto);
  }

  @Post()
  async noteCreate(@Body() dto: NoteCreateDto): Promise<NoteDto> {
    return await this.appService.noteCreate(dto);
  }
}
