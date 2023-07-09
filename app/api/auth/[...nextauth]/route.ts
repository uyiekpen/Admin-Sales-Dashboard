import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { connect } from "@/utils/db";
import UserSchema from "@/models/user";
import bcrypt from "bcrypt";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials: any) {
        await connect();

        try {
          const user = await UserSchema.findOne({
            email: credentials.email,
          });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentails");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
      credentials: {},
    }),
  ],
});

