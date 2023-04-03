import { Injectable } from '@nestjs/common';
//import { User } from './interfaces/user.interface';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ){}

  private readonly users: User[] = [];

  create(createUserDto: CreateUserDto): Promise<User> {
    const user= new User();
    user.firstName=createUserDto.firstName;
    user.lastName=createUserDto.lastName;
    user.email=createUserDto.email;
    user.password=createUserDto.password;
    user.role=createUserDto.role;

    return this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    console.log("Find all service was initialized");
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User>{
    return this.usersRepository.findOneBy({id:id});
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}