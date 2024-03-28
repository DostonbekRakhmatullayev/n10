import {
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { AddressModel } from 'src/modules/address/entities/address.entity';
import { UserModel } from 'src/modules/user/entities/user.entity';

@Table({ tableName: 'comment' })
export class CommentModel extends Model {
  @Column
  text: string;

  @Column
  img: string;

  @ForeignKey(() => UserModel)
  @Column
  users_id: number;

  @BelongsTo(() => UserModel)
  user: UserModel;
}
