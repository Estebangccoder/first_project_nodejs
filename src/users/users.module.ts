import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm'; //new
import { User } from './entities/user.entity';//new

@Module({
  imports: [TypeOrmModule.forFeature([User])],//new
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
