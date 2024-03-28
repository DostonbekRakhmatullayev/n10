import {
  BelongsTo,
  Column,
  BelongsToMany,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { AddressModel } from 'src/modules/address/entities/address.entity';
import { BookModel } from 'src/modules/book/entities/book.entity';
import { CommentModel } from 'src/modules/comment/entities/comment.entity';
import { OrderModel } from 'src/modules/order/entities/order.entity';

interface User {
  firstName: string;
  lastName: string;
}

@Table({ tableName: 'users' })
export class UserModel extends Model<UserModel, User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  img: string;

  @Column({ defaultValue: false })
  isActive: boolean;

  @HasOne(() => AddressModel)
  address: AddressModel;

  @HasMany(() => CommentModel)
  cooment: CommentModel[];

  @BelongsToMany(() => BookModel, () => OrderModel)
  books: BookModel[];
}
