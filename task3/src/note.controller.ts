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
import { NoteDto, NoteUpdateDto } from './dto/note.dto';
import { IStats } from './interface/statistic.interface';

@Controller('notes')
export class NoteController {
  constructor(private readonly appService: NoteService) {}

  @Get('/stats')
  getStats(): IStats {
    return this.appService.getStats();
  }

  @Get()
  getAll(): NoteDto[] {
    return this.appService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id', ParseIntPipe) id: number): NoteDto {
    return this.appService.getOne(id);
  }

  @Delete('/:id')
  noteDelete(@Param('id', ParseIntPipe) id: number): string {
    return this.appService.noteDel(id);
  }

  @Patch('/:id')
  noteUpdate(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: NoteUpdateDto,
  ): NoteDto {
    return this.appService.noteUpdate(id, dto);
  }

  @Post()
  noteCreate(@Body() dto: NoteUpdateDto): NoteDto {
    return this.appService.noteCreate(dto);
  }
}
