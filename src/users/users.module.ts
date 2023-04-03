import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Post } from '../posts/post.entity';
import { Comment } from '../comments/comment.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([Post]),TypeOrmModule.forFeature([Comment])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}