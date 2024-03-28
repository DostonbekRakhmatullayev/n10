import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  async aignUp(CreateAuthDto) {
    const data = await this.userService.getUserEmail(CreateAuthDto.email);
    if (data) {
      throw new BadRequestException('Bunday users bor');
    }

    const password = await bcrypt.hash(CreateAuthDto.password, 7);
    CreateAuthDto.password = password;
    const newUser = await this.userService.create(CreateAuthDto);
    return this.token(newUser);
  }

  async token(user) {
    const payload = { email: user.email, password: user.password, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
