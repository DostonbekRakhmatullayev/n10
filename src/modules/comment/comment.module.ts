import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentModel } from './entities/comment.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { FileModule } from 'src/file/file.module';
@Module({
  imports: [SequelizeModule.forFeature([CommentModel]), FileModule],

  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
