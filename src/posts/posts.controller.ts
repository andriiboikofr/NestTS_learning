import {
  Body,
  Controller,
  Get,
  Param,
  Post as PostMethod,
  UseGuards,
  Req,
  Res
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './post.entity';
import { FastifyReply, FastifyRequest } from 'fastify';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  public async findAll(): Promise<Post[]>{
    console.log("Find all was initialized");
    //console.log(`The users are: ${request.method} and ${request.url}`); //GET /users
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: number,
    @Res() response: FastifyReply,
  ) {
    const post = this.postsService.findOne(id);
    return response.send({ success: true, result: post });
  }

  @PostMethod('create')
  async create(@Body() createPostDto: CreatePostDto): Promise<Post> {
    const post = this.postsService.create(createPostDto);
    return post;
  }
}
