import { Controller, Get, Body, Param, Delete, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { UpdatePostDto } from 'src/posts/dto/update-post.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}


  @Get('users')
  findAllUsers() {
    return this.adminService.findAllUsers();
  }

  @Put('users/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.adminService.updateUser(+id, updateUserDto);
  }

  @Delete('users/:id')
  removeUser(@Param('id') id: string) {
    return this.adminService.removeUser(+id);
  }

  @Get('posts')
  findAllPosts() {
    return this.adminService.findAllPosts();
  }

  @Put('posts/:id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.adminService.updatePost(id, updatePostDto);
  }

  @Delete('posts/:id')
  removePost(@Param('id') id: string) {
    return this.adminService.removePost(+id);
  }

}
