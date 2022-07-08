import { UserModel, UserType } from "../models/user.model";

export async function createUser({ name, address, age, isMarried }: UserType) {
  if (!name) {
    return { message: "no userName", status: "error" };
  }
  const userExist = await UserModel.findOne({ name });
  if (userExist?.name) {
    return { message: "User Already exists", status: "error" };
  }

  const user = new UserModel({
    name,
    address,
    age,
    isMarried,
  });
  await user.save();
  return {
    message: "User Created Successfully",
    status: "success",
  };
}
