import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/user.module';
import { ProjectsModule } from './modules/project.module';
import { SubjectModule } from './modules/subject.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('HOST'),
        port: +configService.get<number>('PORT'),
        username: configService.get('USER'),
        password: configService.get('PASSWORD'),
        database: configService.get('DATABASE'),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    UsersModule,
    ProjectsModule,
    SubjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
