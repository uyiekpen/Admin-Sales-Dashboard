"use client";
import { CustomButton, CustomCard, InputForm, Label } from "@/components";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

const SignIn = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/dashboard");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5">
      <CustomCard style="border-[2px] py-8 px-4 md:px-12 shadow-sm bg-white flex justify-center items-center rounded-md ">
        <div className="mb-8 flex justify-center items-center flex-col w-full">
          <h3 className="mb-1">Sign Up</h3>
          <p className="text-center">
            And lets get started with your free trial
          </p>
        </div>
        <form onSubmit={onLogin}>
          <div className="mt-2">
            <Label title="Email" />{" "}
            <InputForm
              type="email"
              id="email"
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
              placeholder="Enter your Email"
              containerStyles="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            />
          </div>
          <div className="mt-2">
            <Label title="Password" />{" "}
            <InputForm
              id="password"
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
              type="password"
              placeholder="Email your password"
              containerStyles="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
            />
          </div>

          <div className="mt-8 flex justify-center items-center flex-col w-full">
            <CustomButton
              title="Submit"
              btnType="submit"
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
