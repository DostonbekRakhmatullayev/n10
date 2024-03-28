import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CommentModel } from './entities/comment.entity';
import { FileServic } from 'src/file/file.service';
@Injectable()
export class CommentService {
  constructor(
    @InjectModel(CommentModel)
    private commentModel: typeof CommentModel,
    private fileUplode: FileServic,
  ) {}
  async create(createCommentDto, img) {
    const file = await this.fileUplode.upload(img);

    return this.commentModel.create({
      ...createCommentDto,
      img: `/${file}`,
    });
  }

  findAll() {
    return this.commentModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
