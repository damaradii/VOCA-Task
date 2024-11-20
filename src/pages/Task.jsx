import React, { useEffect } from "react";
import { usePostTask } from "../config/postTask";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { TaskForm, TaskDone, Image, Button, InputForm } from "../components";
import edit from "../assets/edit.svg";
import logout from "../assets/log_out.svg";
import { useAuth } from "../config/auth";
import { removeAccessToken } from "../utils/tokenManager";

const Task = () => {
  const { posts, getPosts, deletePost, updatePost } = usePostTask();
  const { user, refreshUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    getPosts();
    refreshUser();
  }, [getPosts, refreshUser]);

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
        Swal.fire("Dihapus!", "Task anda telah dihapus.", "success");
      }
    });
  };

  const handleComplete = async (id) => {
    await updatePost(id, { isDone: true });
    Swal.fire("Berhasil!", "Task anda sudah selesai.", "success");
    getPosts();
  };

  const validPosts = Array.isArray(posts) ? posts : [];

  const buttonLogOut = () => {
    removeAccessToken();
    localStorage.removeItem("user");
    navigate("/");
  };

  const buttonEditProfile = () => navigate("/update-profile");

  return (
    <div className="flex flex-col md:flex-row md:m-5">
      {/* User */}
      <div
        className="flex flex-col items-center justify-center px-10 py-10 
      rounded-xl lg:px-8 bg-[#1D1825] mb-5 md:mr-5 h-auto md:h-96"
      >
        <Image
          src={
            user?.photo_url ||
            "https://i.pinimg.com/564x/02/ae/7a/02ae7a44746827850f0ec9687c78af8d.jpg"
          }
        />
        <h1 className="text-white">
          Welcome Back,{" "}
          <span className="font-bold">{user?.name || "Guest"}</span>
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

      {/* Task Panel */}
      <div className="flex flex-col justify-center rounded-xl lg:px-8 bg-[#1D1825] py-6">
        <div className="sm:mx-auto sm:w-96 sm:max-w-sm space-y-5">
          <div className="lg:mx-0 mx-5">
            <InputForm />
          </div>
          <h1 className="text-white text-left lg:mb-0 lg:mx-0 mx-5">
            Tasks to do - {validPosts.filter((post) => !post.isDone).length}
          </h1>
          <div className="lg:mx-0 mx-5">
            {validPosts
              .filter((post) => !post.isDone)
              .map((post) => (
                <TaskForm
                  key={post._id}
                  props={{
                    id: post._id,
                    title: post.title,
                    onDelete: () => handleDelete(post._id),
                    onComplete: () => handleComplete(post._id),
                  }}
                />
              ))}
          </div>
          <h1 className="text-white text-left m-3 lg:mx-0 mx-5">
            Done - {validPosts.filter((post) => post.isDone).length}
          </h1>
          <div className="lg:mx-0 mx-5">
            {validPosts
              .filter((post) => post.isDone)
              .map((post) => (
                <TaskDone key={post._id} props={{ title: post.title }} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
