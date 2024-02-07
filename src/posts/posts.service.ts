import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {

  constructor(
    @InjectModel( Post.name )
    private readonly postModel: Model<Post>
  ){}

  create(createPostDto: CreatePostDto) {
    return this.postModel.create(createPostDto);
  }

  findAll() {
    return this.postModel.find({});
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
