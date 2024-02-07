import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { UpdatePostDto } from 'src/posts/dto/update-post.dto';
import { UsersService } from 'src/users/users.service';
import { PostsService } from 'src/posts/posts.service';

@Injectable()
export class AdminService {

  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService
  ){}

  findAllUsers() {
    return this.usersService.findAll();
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  removeUser(id: number) {
    return this.usersService.remove(id);
  }

  findAllPosts() {
    return this.postsService.findAll();
  }

  updatePost(id: string, updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  removePost(id: number) {
    return this.postsService.remove(id);
  }

}
