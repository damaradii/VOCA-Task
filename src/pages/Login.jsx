import React from "react";
import Check from "../assets/Check.svg";
import { Button } from "../components";

const Login = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-10 py-10 rounded-xl lg:px-8 bg-[#1D1825]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-center text-2xl/9 font-bold  text-[#916bc9]">
          VOCA
        </h1>
        <h2 className="text-center text-2xl/9 font-normal  text-white">Task</h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-96 sm:max-w-sm ">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm/6 font-medium text-white text-left"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="sarah.santoso@gmail.com"
              required
              className="mt-2 p-3 block w-full rounded-md border-0 py-1.5 text-white ring-1 
               ring-[#916bc9] placeholder:text-gray-400  sm:text-sm/6 bg-[#1D1825]"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-white text-left"
              >
                Password
              </label>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="**********"
              autoComplete="current-password"
              required
              className="mt-2 p-3 block w-full rounded-md border-0 py-1.5 text-white ring-1 
               ring-[#916bc9] placeholder:text-gray-400 sm:text-sm/6 bg-[#1D1825]"
            />
          </div>

          <div>
            <button className="w-full">
              <Button title="Sign In" to="/task" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
