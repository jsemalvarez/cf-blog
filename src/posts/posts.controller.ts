import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string){
    return this.postsService.findByUserId(userId);
  }

  @Get('/search')
  findByTag(@Query('tag') tag: string){
    return this.postsService.findByTag(tag)
  }

  @Get('/filter')
  findByTerm(@Query('term') term: string){
    return this.postsService.findByTerm(term)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(+id);
  }
}
