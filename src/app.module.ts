import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { BookModule } from './modules/book/book.module';
import { CommentModule } from './modules/comment/comment.module';
import { AddressModule } from './modules/address/address.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModel } from './modules/user/entities/user.entity';
import { AddressModel } from './modules/address/entities/address.entity';
import { CommentModel } from './modules/comment/entities/comment.entity';
import { OrderModule } from './modules/order/order.module';
import { BookModel } from './modules/book/entities/book.entity';
import { OrderModel } from './modules/order/entities/order.entity';
import { AuthModule } from './modules/auth/auth.module';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: path.join(process.cwd(), 'upload'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'RD20001202',
      database: 'n10',
      models: [UserModel, AddressModel, CommentModel, BookModel, OrderModel],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    UserModule,
    BookModule,
    CommentModule,
    AddressModule,
    OrderModule,
    AuthModule,
    FileModule,
  ],
})
export class AppModule {}
