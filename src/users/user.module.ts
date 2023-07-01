import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserMongooseSchema, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserSchema.name, schema: UserMongooseSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule {}
