import { Injectable } from '@nestjs/common';
//import { User } from './interfaces/user.interface';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentsRepository: Repository<Comment>,
  ){}

  private readonly comments: Comment[] = [];

  create(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment= new Comment();
    comment.content=createCommentDto.content;
    comment.userId=createCommentDto.userId;
    comment.postId=createCommentDto.postId;

    return this.commentsRepository.save(comment);
  }

  async findAll(): Promise<Comment[]> {
    console.log("Find all service was initialized");
    return this.commentsRepository.find();
  }

  findOne(id: number): Promise<Comment>{
    return this.commentsRepository.findOneBy({id:id});
  }

  async remove(id: string): Promise<void> {
    await this.commentsRepository.delete(id);
  }
}