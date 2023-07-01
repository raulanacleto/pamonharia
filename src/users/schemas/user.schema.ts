import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = HydratedDocument<UserSchema>;

@Schema({ collection: 'users' })
export class UserSchema {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  password: string;
}
export const UserMongooseSchema = SchemaFactory.createForClass(UserSchema);
