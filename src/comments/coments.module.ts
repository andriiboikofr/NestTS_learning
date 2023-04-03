import { Module } from '@nestjs/common';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './comment.entity';
import { User } from '../users/user.entity';
import { Post } from '../posts/post.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User]),TypeOrmModule.forFeature([Post]),TypeOrmModule.forFeature([Comment])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}