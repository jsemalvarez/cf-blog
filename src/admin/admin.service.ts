import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { UpdatePostDto } from 'src/posts/dto/update-post.dto';

@Injectable()
export class AdminService {

  findAllUsers() {
    return `This action returns all users`;
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  removeUser(id: number) {
    return `This action removes a #${id} user`;
  }

  findAllPosts() {
    return `This action returns all posts`;
  }

  updatePost(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  removePost(id: number) {
    return `This action removes a #${id} post`;
  }

}
