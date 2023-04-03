import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { User } from '../users/user.entity';
import { Comment } from '../comments/comment.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([Post]),TypeOrmModule.forFeature([Comment])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}