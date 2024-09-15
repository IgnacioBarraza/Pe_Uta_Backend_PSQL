import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto, LoginUserDto } from '../utils/interfaces';
import { ConfigService } from '@nestjs/config';
import { validateRut } from '../utils/rutValidator';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  private readonly saltRounds = 10;
  private readonly jwtSecret = this.configService.get<string>('JWT_SECRET');
  private readonly jwtExpiration =
    this.configService.get<string>('JWT_EXPIRATION');

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private configService: ConfigService,
  ) {}

  async register(registerUserDto: RegisterUserDto): Promise<User> {
    const { name, rut, password } = registerUserDto;

    if (!validateRut(rut)) throw new Error('Rut invalido');

    const hashedPassword = await bcrypt.hash(password, this.saltRounds);

    const user = this.userRepository.create({
      name,
      password: hashedPassword,
      rut,
      user_type: 'admin',
      evaluations: [],
    });

    return this.userRepository.save(user);
  }

  async login(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const { rut, password } = loginUserDto;

    if (!validateRut(rut)) throw new Error('Rut invalido');

    const user = await this.userRepository.findOneBy({ rut });
    if (!user) throw new Error('Usuario no encontrado');

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error('Contraseña incorrecta');

    const accessToken = jwt.sign(
      {
        id: user.id,
        name: user.name,
        user_type: user.user_type,
        evaluated: user.evaluations,
      },
      this.jwtSecret,
      { expiresIn: this.jwtExpiration },
    );

    return { accessToken };
  }
}
