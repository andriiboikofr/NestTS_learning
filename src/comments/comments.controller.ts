import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Req,
  Res
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './comment.entity';
import { FastifyReply, FastifyRequest } from 'fastify';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Get('/')
  public async findAll(): Promise<Comment[]>{
    console.log("Find all was initialized");
    //console.log(`The users are: ${request.method} and ${request.url}`); //GET /users
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(
    @Param('id')
    id: number,
    @Res() response: FastifyReply,
  ) {
    const comment = this.commentsService.findOne(id);
    return response.send({ success: true, result: comment });
  }

  @Post('create')
  async create(@Body() createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = this.commentsService.create(createCommentDto);
    return comment;
  }
}
