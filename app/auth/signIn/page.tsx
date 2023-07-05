import { CustomButton, CustomCard, InputForm, Label } from "@/components";
import React from "react";

const SignIn = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5">
      <CustomCard style="border-[2px] py-8 px-4 md:px-12 shadow-sm bg-white flex justify-center items-center rounded-md ">
        <div className="mb-8 flex justify-center items-center flex-col w-full">
          <h3 className="mb-1">Sign Up</h3>
          <p className="text-center">
            And lets get started with your free trial
          </p>
        </div>
        <form>
          <div className="mt-2">
            <Label title="Email" />{" "}
            <InputForm
              type="email"
              placeholder="Enter your Email"
              containerStyles="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            />
          </div>
          <div className="mt-2">
            <Label title="Password" />{" "}
            <InputForm
              type="password"
              placeholder="Email your password"
              containerStyles="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            />
          </div>

          <div className="mt-8 flex justify-center items-center flex-col w-full">
            <CustomButton
              title="Submit"
              containerStyles="bg-btnblue text-white w-full mt-1 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium  hover:bg-green-500 capitalize focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mt-4 text-center">
            <span>Already have an account? </span>
            Sign in
          </div>
        </form>
      </CustomCard>
    </div>
  );
};

export default SignIn;