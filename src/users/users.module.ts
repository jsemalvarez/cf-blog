import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService],
  imports:[
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema
      }
    ])
  ]
})
export class UsersModule {}
