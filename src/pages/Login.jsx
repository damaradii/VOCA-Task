import React from "react";
import Check from "../assets/Check.svg";
import { Button } from "../components";
import { Password, Email } from "../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const buttonSignIn = () => {
    navigate("/task");
  };
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
            <Email />
          </div>

          <div>
            <Password />
          </div>

          <div>
            <button className="w-full" onClick={buttonSignIn}>
              <Button title="Sign In" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
