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
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { FastifyReply, FastifyRequest } from 'fastify';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  public async findAll(): Promise<User[]>{
    console.log("Find all was initialized");
    //console.log(`The users are: ${request.method} and ${request.url}`); //GET /users
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id')
    id: string,
    @Res() response: FastifyReply,
  ) {
    const user = await this.usersService.findOne(id);
    return response.send({ success: true, result: user });
  }

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersService.create(createUserDto);
    return user;
  }
}
