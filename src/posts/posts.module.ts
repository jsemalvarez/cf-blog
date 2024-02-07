import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post, PostSchema } from './entities/post.entity';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: PostSchema
      }
    ])
  ]
})
export class PostsModule {}
