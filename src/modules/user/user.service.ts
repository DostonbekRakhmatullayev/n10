import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserModel } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CommentModel } from '../comment/entities/comment.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserModel)
    private userModel: typeof UserModel,
  ) {}
  create(createUserDto) {
    return this.userModel.create(createUserDto);
  }

  async getUserEmail(email: string) {
    return this.userModel.findOne({
      where: {
        email,
      },
    });
  }

  findAll() {
    return this.userModel.findAll({
      include: {
        all: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
