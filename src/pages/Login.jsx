import React, { useState } from "react";
import { Input, Button } from "../components";
import { useNavigate } from "react-router-dom";
import Check from "../assets/Check.svg";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const buttonSignIn = () => {
    if (!email || !password) {
      return;
    }
    navigate("/task");
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-10 py-10 rounded-xl lg:px-8 bg-[#1D1825]">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-center text-2xl/9 font-bold text-[#916bc9]">
          VOCA
        </h1>
        <h2 className="text-center text-2xl/9 font-normal text-white">Task</h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-96 sm:max-w-sm ">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              htmlFor="email"
              id="email"
              name="email"
              type="email"
              placeholder="sarah.santoso@gmail.com"
            />
          </div>

          <div>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              htmlFor="password"
              id="password"
              name="password"
              type="password"
              placeholder="*******"
            />
          </div>

          <div
            className="w-full bg-[#523C72] hover:bg-[#6a4d95] rounded-md cursor-pointer"
            onClick={buttonSignIn}
          >
            <Button src={Check} title="Sign In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
