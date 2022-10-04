import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'notes', timestamps: false })
export class Notes extends Model<Notes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  content: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  archived: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  date?: string;
}
