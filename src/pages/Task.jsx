import React from "react";
import usePostTask from "../config/postTask";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import edit from "../assets/edit.svg";
import logout from "../assets/log_out.svg";
import plus from "../assets/plus.svg";
import { TaskForm, TaskDone, Image, Button } from "../components";

const Task = () => {
  const { posts, getPosts } = usePostTask();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const navigate = useNavigate();

  const buttonLogOut = () => {
    navigate("/");
  };
  const buttonEditProfile = () => {
    navigate("/update-profile");
  };

  return (
    <div className="flex">
      {/* profile */}
      <div className="flex items-center min-h-full flex-col justify-center px-10 py-10 rounded-xl lg:px-8 bg-[#1D1825] mr-5 h-96">
        <div className="flex justify-center">
          <Image src="https://i.pinimg.com/564x/02/ae/7a/02ae7a44746827850f0ec9687c78af8d.jpg" />
        </div>
        <h1 className="text-white">
          Welcome Back, <span className="font-bold">Sarah!</span>
        </h1>
        <div
          className="flex justify-center mt-3 bg-[#2C2C2C] w-32 h-10 rounded-md"
          onClick={buttonEditProfile}
        >
          <Button title="Edit Profile" src={edit} />
        </div>
        <div
          className="flex justify-center mt-3 bg-red-600 w-32 h-10 rounded-md"
          onClick={buttonLogOut}
        >
          <Button title="Sign Out" src={logout} />
        </div>
      </div>

      {/* right task */}
      <div className="flex min-h-full flex-col justify-center  rounded-xl lg:px-8 bg-[#1D1825] py-6">
        <div className=" sm:mx-auto sm:w-96 sm:max-w-sm ">
          <form className="space-y-6" action="#" method="POST">
            <div className="flex justify-center items-center">
              <input
                id="task"
                name="task"
                type="text"
                autoComplete="task"
                placeholder="Add a new task"
                required
                className="p-3 block w-full rounded-md border-0 py-1.5 text-white ring-1 
               ring-[#916bc9] placeholder:text-gray-400  sm:text-sm/6 bg-[#1D1825]"
              />

              <button
                type="submit"
                className="flex items-center w-11 h-10 justify-center rounded-lg bg-[#916bc9] hover:bg-[#6a4d95] ml-3"
              >
                <img src={plus} alt="" className="w-5" />
              </button>
            </div>
          </form>

          <h1 className="text-white text-left mt-14 mb-3">
            Tasks to do - {posts.length}
          </h1>
          {/*  */}
          <div>
            {posts.map((post) => (
              <TaskForm
                key={post._id}
                props={{
                  title: post.title,
                }}
              />
            ))}
          </div>

          <h1 className="text-white text-left mt-14 mb-3">
            Done - {posts.length}
          </h1>
          {/*  */}
          <div>
            {posts.map((post) => (
              <TaskDone
                key={post._id}
                props={{
                  title: post.title,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
