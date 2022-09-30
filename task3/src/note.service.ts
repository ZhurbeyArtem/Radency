import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { NoteDto, NoteUpdateDto } from './dto/note.dto';
import { getActive, getArchive, getData } from './helpers/getData';
import { IStats } from './interface/statistic.interface';

@Injectable()
export class NoteService {
  private notes: NoteDto[] = [
    {
      id: 1,
      name: 'todo1',
      content: 'todo1',
      category: 'Task',
      archived: false,
    },
    {
      id: 2,
      name: 'todo2',
      content: 'todo2',
      category: 'Task',
      archived: true,
    },
    {
      id: 3,
      name: 'todo3',
      content: 'todo3',
      category: 'Idea',
      archived: false,
    },
    {
      id: 4,
      name: 'todo4',
      content: 'todo4',
      category: 'Random Thought',
      archived: false,
    },
    {
      id: 5,
      name: 'todo5',
      content: 'todo5',
      category: 'Random Thought',
      archived: false,
    },
    {
      id: 6,
      name: 'todo6',
      content: 'todo6',
      category: 'Random Thought',
      archived: true,
    },
    {
      id: 7,
      name: 'todo7',
      content: 'todo7',
      category: 'Idea',
      archived: true,
    },
  ];

  getOne(id: number) {
    return this.notes.filter((note) => note.id === id)[0];
  }

  getAll(): NoteDto[] {
    return this.notes;
  }

  getStats() {
    const stats: IStats = {
      active: {
        Task: getActive(this.notes, 'Task'),
        Idea: getActive(this.notes, 'Idea'),
        'Random Thought': getActive(this.notes, 'Random Thought'),
      },
      archive: {
        Task: getArchive(this.notes, 'Task'),
        Idea: getArchive(this.notes, 'Idea'),
        'Random Thought': getArchive(this.notes, 'Random Thought'),
      },
    };

    return stats;
  }

  noteDel(id: number) {
    const note = this.notes.find((note) => note.id === id);
    if (!note)
      throw new HttpException(
        'note with this id already deleted',
        HttpStatus.BAD_REQUEST,
      );
    this.notes = this.notes.filter((note) => note.id !== id);
    return 'success';
  }

  noteUpdate(id: number, obj: NoteUpdateDto) {
    const note = this.notes.find((note) => note.id === id);
    if (!note)
      throw new HttpException(
        'note with this id doesn`t find',
        HttpStatus.BAD_REQUEST,
      );
    for (const key in obj) note[key] = obj[key];
    return note;
  }

  noteCreate(obj: NoteUpdateDto): NoteDto {
    const { content } = obj;
    const note = {
      id: this.notes.length + 1,
      ...obj,
      date: getData(content),
    };
    this.notes.push(note);
    return note;
  }
}
