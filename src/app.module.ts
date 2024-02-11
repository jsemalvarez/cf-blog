import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AdminModule } from './admin/admin.module';
import { CommonModule } from './common/common.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsersModule, 
    PostsModule, 
    AdminModule, CommonModule
  ],
})
export class AppModule {}
