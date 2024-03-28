import {
  BelongsTo,
  Column,
  HasMany,
  HasOne,
  BelongsToMany,
  DataType,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { BookModel } from 'src/modules/book/entities/book.entity';
import { UserModel } from 'src/modules/user/entities/user.entity';

@Table({ tableName: 'orders' })
export class OrderModel extends Model {
  @ForeignKey(() => BookModel)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  book_id: number;

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  user_id: number;
}
