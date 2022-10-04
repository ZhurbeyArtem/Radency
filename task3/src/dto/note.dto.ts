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
export class NoteCreateDto {
  @IsString()
  name: string;

  @IsString()
  category: string;

  @IsString()
  content: string;

  @IsBoolean()
  archived: boolean;
}
export class NoteUpdateDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsBoolean()
  @IsOptional()
  archived?: boolean;
}
