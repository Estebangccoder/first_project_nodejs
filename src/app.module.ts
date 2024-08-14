import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm'; //new
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:"mysql",
      host:"b105arooomdaaun00cfu-mysql.services.clever-cloud.com",
      port:3306,
      username:"uy8mibr0ocl1psh1",
      password:"XCfBsXreKje21N2rbM5x",
      database:"b105arooomdaaun00cfu",
      //autoLoadEntities: true,
      entities: [User],
      synchronize: true,


    }),
    
     UsersModule],
})
export class AppModule {}
