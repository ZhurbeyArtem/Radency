import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NoteCreateDto, NoteDto, NoteUpdateDto } from './dto/note.dto';
import { getActive, getArchive, getData } from './helpers/getData';
import { IStats } from './interface/statistic.interface';
import { InjectModel } from '@nestjs/sequelize';
import { Notes } from './notes.model';

@Injectable()
export class NoteService {
  constructor(@InjectModel(Notes) private notesRepository: typeof Notes) {}

  async getOne(id: number) {
    return await this.notesRepository.findOne({ where: { id } });
  }

  async getAll(): Promise<NoteDto[]> {
    return await this.notesRepository.findAll();
  }

  async getStats() {
    const test = await this.getAll();
    const stats: IStats = {
      active: {
        Task: getActive(test, 'Task'),
        Idea: getActive(test, 'Idea'),
        'Random Thought': getActive(test, 'Random Thought'),
      },
      archive: {
        Task: getArchive(test, 'Task'),
        Idea: getArchive(test, 'Idea'),
        'Random Thought': getArchive(test, 'Random Thought'),
      },
    };

    return stats;
  }

  async noteDel(id: number): Promise<string> {
    const note = await this.notesRepository.findOne({ where: { id } });
    if (!note)
      throw new HttpException(
        'note with this id already deleted',
        HttpStatus.BAD_REQUEST,
      );
    await note.destroy();
    return 'success';
  }

  async noteUpdate(id: number, obj: NoteUpdateDto): Promise<NoteDto> {
    const note = await this.notesRepository.findOne({ where: { id } });
    if (!note)
      throw new HttpException(
        'note with this id doesn`t find',
        HttpStatus.BAD_REQUEST,
      );
    await note.update(obj);
    return note;
  }

  async noteCreate(obj: NoteCreateDto): Promise<NoteDto> {
    const { content } = obj;
    const note = {
      ...obj,
      date: getData(content),
    };
    return await this.notesRepository.create(note);
  }
}
