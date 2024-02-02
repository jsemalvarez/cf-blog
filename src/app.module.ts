import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [UsersModule, PostsModule, AdminModule],
})
export class AppModule {}
