import { Injectable } from '@nestjs/common';
//import { User } from './interfaces/user.interface';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>,
  ){}

  private readonly posts: Post[] = [];

  create(createPostDto: CreatePostDto): Promise<Post> {
    const post= new Post();
    post.title=createPostDto.title;
    post.content=createPostDto.content;
    post.userId=createPostDto.userId;

    return this.postsRepository.save(post);
  }

  async findAll(): Promise<Post[]> {
    console.log("Find all service was initialized");
    return this.postsRepository.find();
  }

  findOne(id: number): Promise<Post>{
    return this.postsRepository.findOneBy({id:id});
  }

  async remove(id: string): Promise<void> {
    await this.postsRepository.delete(id);
  }
}