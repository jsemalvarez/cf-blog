import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {

  constructor(
    @InjectModel( User.name )
    private readonly userModel: Model<User>
  ){}

  create(createUserDto: CreateUserDto) {
    return this.userModel.create( createUserDto );
  }

  login(createUserDto: CreateUserDto) {
    return 'This action login an user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
