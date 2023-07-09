import { UserDataBase } from "@/types";
import mongoose, { Mongoose } from "mongoose";

interface newUser extends UserDataBase, mongoose.Document {}

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<UserDataBase>("User", userSchema);
