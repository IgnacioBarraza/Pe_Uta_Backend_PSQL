import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { LoginUserDto, RegisterUserDto } from '../utils/interfaces';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.register(registerUserDto);
  }

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }
}
