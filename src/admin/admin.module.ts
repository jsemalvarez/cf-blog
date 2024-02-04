import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { PostsModule } from './../posts/posts.module';
import { UsersModule } from './../users/users.module';

@Module({
  controllers: [AdminController],
  providers: [AdminService],
  imports:[ UsersModule, PostsModule ]
})
export class AdminModule {}
