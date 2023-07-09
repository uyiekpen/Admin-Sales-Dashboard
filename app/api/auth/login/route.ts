import { NextRequest, NextResponse } from "next/server";
import userSchema from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    const user = await userSchema.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "user doesnot exist" },
        { status: 400 }
      );
    }
    console.log("user exist");

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "invalid password" }, { status: 400 });
    }
    console.log(user);

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    //create token
    const token = await jwt.sign(tokenData, "ThisIsPractice", {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "login successfull",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
