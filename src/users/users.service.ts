import { Injectable, NotFoundException } from '@nestjs/common';
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
    return this.userModel.find({})
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);

    if(!user){
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    
    const userUpdated = {
      ...user.toJSON(),
      ...updateUserDto,
      _id: id
    }
    await user.updateOne(userUpdated);

    return userUpdated;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
