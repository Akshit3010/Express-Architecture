import { Schema, model } from "mongoose";

export type UserType = {
  name: string;
  age: number;
  address: string;
  isMarried: boolean;
};

const UserSchema = new Schema<UserType>({
  name: String,
  address: String,
  age: Number,
  isMarried: Boolean,
});

export const UserModel = model<UserType>("user", UserSchema);
