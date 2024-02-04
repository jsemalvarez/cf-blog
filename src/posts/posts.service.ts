import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll() {
    return `This action returns all posts`;
  }
  
  findByUserId(userId: string) {
    return `This action returns all posts by userId ${userId}`;
  }

  findByTag(tag:string){
    return `This action returns all posts filter by tag ${tag}`;
  }

  findByTerm(term:string){
    return `This action returns all posts filter by term ${term}`;
  }

  findOne(id: number) {
    return `This action returns a postId #${id}`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
