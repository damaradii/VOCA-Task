import React from "react";
import { usePostTask } from "../config/postTask";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import edit from "../assets/edit.svg";
import logout from "../assets/log_out.svg";
import { TaskForm, TaskDone, Image, Button, InputForm } from "../components";
import Swal from "sweetalert2";

const Task = () => {
  const { posts, getPosts, deletePost } = usePostTask();

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

  const dummyName = { title: "Sarah" };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Anda tidak dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePost(id);
        Swal.fire({
          title: "Dihapus!",
          text: "Task anda telah dihapus.",
          icon: "success",
        });
      }
    });
  };

  const { updatePost } = usePostTask();
  const handleComplete = async (id) => {
    await updatePost(id, { isDone: true });
    Swal.fire({
      title: "Berhasil!",
      text: "Task anda sudah selesai.",
      icon: "success",
    });
    getPosts();
  };

  return (
    <div className="flex">
      {/* profile */}
      <div className="flex items-center min-h-full flex-col justify-center px-10 py-10 rounded-xl lg:px-8 bg-[#1D1825] mr-5 h-96">
        <div className="flex justify-center">
          <Image src="https://i.pinimg.com/564x/02/ae/7a/02ae7a44746827850f0ec9687c78af8d.jpg" />
        </div>
        <h1 className="text-white">
          Welcome Back, <span className="font-bold">{dummyName.title}!</span>
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
          <div>
            <InputForm />
          </div>
          <h1 className="text-white text-left mt-14 mb-3">
            Tasks to do - {posts.filter((post) => !post.isDone).length}
          </h1>
          <div>
            {posts
              .filter((post) => !post.isDone)
              .map((post) => (
                <TaskForm
                  key={post._id}
                  props={{
                    id: post._id,
                    title: post.title,
                    onDelete: () => handleDelete(post._id),
                    onComplete: handleComplete,
                  }}
                />
              ))}
          </div>

          {/* done tasks */}
          <h1 className="text-white text-left mt-14 mb-3">
            Done - {posts.filter((post) => post.isDone).length}
          </h1>
          <div>
            {posts
              .filter((post) => post.isDone)
              .map((post) => (
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
