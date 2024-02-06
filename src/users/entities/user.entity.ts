import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document{

    @Prop({
        unique: true,
        index: true
    })
    email: string;

    @Prop()
    name: string;

    @Prop()
    user: string;

    @Prop()
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User)
