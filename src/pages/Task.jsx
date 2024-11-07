import React from "react";
import edit from "../assets/edit.svg";
import logout from "../assets/log_out.svg";
import plus from "../assets/plus.svg";
import { useEffect } from "react";
import usePostTask from "../config/postTask";
import { TaskForm } from "../components";
import { useNavigate } from "react-router-dom";

const Task = () => {
  const { posts, getPosts, deletePost } = usePostTask();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const handleDelete = (id) => {
    deletePost(id);
    getPosts();
  };

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
      <div className="flex min-h-full flex-col justify-center px-10 py-10 rounded-xl lg:px-8 bg-[#1D1825] mr-5 h-96">
        <div className="flex justify-center">
          <img
            src="https://i.pinimg.com/564x/02/ae/7a/02ae7a44746827850f0ec9687c78af8d.jpg"
            className="h-32 mx-auto object-cover rounded-full w-32 mb-5"
          />
        </div>
        <h1 className="text-white">
          Welcome Back, <span className="font-bold">Sarah!</span>
        </h1>
        <div className="flex justify-center mt-3" onClick={buttonEditProfile}>
          <button className="flex items-center justify-center font-light text-white bg-[#2C2C2C] w-32 h-10 rounded-md">
            <img src={edit} alt="edit" className="mr-3" />
            Edit Profile
          </button>
        </div>
        <div className="flex justify-center mt-3" onClick={buttonLogOut}>
          <button className="flex items-center justify-center font-light text-white bg-red-600 w-32 h-10 rounded-md">
            <img src={logout} alt="edit" className="mr-3" />
            Sign Out
          </button>
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

          <h1 className="text-white text-left mt-14 mb-3">Tasks to do - 4</h1>

          {posts.map((post) => (
            <TaskForm
              key={post._id}
              props={{
                title: post.title,
                onDelete: () => handleDelete(post._id),
              }}
            />
          ))}

          <h1 className="text-white text-left mt-14 mb-3">Done - 1</h1>
          {/*  */}
          <div className="flex bg-[#15101C] p-4 rounded-lg">
            <div className="text-[#78CFB0] flex-1 text-left line-through  ">
              <h1>mantap kali wakk disini tulisananya</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
