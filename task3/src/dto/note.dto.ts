import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';
export class NoteDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsString()
  content: string;

  @IsBoolean()
  archived: boolean;

  @IsString()
  @IsOptional()
  date?: string;
}
export class NoteUpdateDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsString()
  content: string;

  @IsBoolean()
  archived: boolean;
}
