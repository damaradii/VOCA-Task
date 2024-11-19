import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../config/auth";
import { Input, Button } from "../components"; // Sesuaikan path
import Check from "../assets/Check.svg"; // Ikon untuk tombol

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async () => {
    try {
      const user = await login(email, password);
      console.log("Logged in user:", user);
      navigate("/task");
    } catch (error) {
      console.error(error.message);
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div
      className="flex min-h-full flex-col justify-center px-10 py-10 
    rounded-xl lg:px-8 bg-[#1D1825]"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-center text-2xl/9 font-bold text-[#916bc9]">
          VOCA
        </h1>
        <h2 className="text-center text-2xl/9 font-normal text-white">Task</h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-96 sm:max-w-sm">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            type="email"
            placeholder="sarah.santoso@gmail.com"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
            placeholder="*******"
          />
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <div
            className="bg-[#523C72] hover:bg-[#6a4d95] rounded-md cursor-pointer"
            onClick={handleLogin}
          >
            <Button src={Check} title="Sign In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
