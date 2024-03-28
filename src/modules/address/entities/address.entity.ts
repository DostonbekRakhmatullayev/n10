import {
  BelongsTo,
  Column,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserModel } from 'src/modules/user/entities/user.entity';

@Table({ tableName: 'address' })
export class AddressModel extends Model {
  @Column
  city: string;

  @ForeignKey(() => UserModel)
  @Column
  user_id: number;

  @BelongsTo(() => UserModel)
  users: UserModel;
}
