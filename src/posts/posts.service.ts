import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
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

  //TODO: rename findOneById
  async findOne(id: string) {
    const post = await this.postModel.findById(id);

    if(!post){
      throw new NotFoundException(`post id ${id} not found`);
    }

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id)
    const updateData = {
      ...post.toJSON(),
      ...updatePostDto,
      _id:id
    }
    await post.updateOne(updatePostDto)
    return updateData;
  }

  async remove(id: string) {
    const post = await this.findOne(id)

    await post.deleteOne()

    return {message:`Post whit id ${id} removed successfully`};
  }
}
