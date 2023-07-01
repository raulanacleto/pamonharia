import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { UserService } from '../users/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserMongooseSchema, UserSchema } from '../users/schemas/user.schema';
import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserSchema.name, schema: UserMongooseSchema },
    ]),
    UserModule,
    JwtModule.register({
      secret:
        'e1afecd3da731d939cb0fe9f9150972e4b637ff3858c0411d57487e6772fc7dc',
    }),
  ],
  controllers: [AuthController],
  providers: [UserService, AuthService],
})
export class AuthModule {}
