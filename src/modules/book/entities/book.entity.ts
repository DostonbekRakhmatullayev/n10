import {
  BelongsTo,
  BelongsToMany,
  Column,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { AddressModel } from 'src/modules/address/entities/address.entity';
import { CommentModel } from 'src/modules/comment/entities/comment.entity';
import { OrderModel } from 'src/modules/order/entities/order.entity';
import { UserModel } from 'src/modules/user/entities/user.entity';

@Table({ tableName: 'books' })
export class BookModel extends Model {
  @Column
  book_name: string;

  @Column
  price: number;

  @BelongsToMany(() => UserModel, () => OrderModel)
  users: UserModel[];
}
