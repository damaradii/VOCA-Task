import { create } from "zustand";
import { axiosInstance as api } from "./axiosInstance";

export const usePostTask = create((set) => ({
  posts: [],

  getPosts: async () => {
    try {
      const response = await api.get("/tasks");
      console.log("Fetched tasks:", response);
      const formattedPosts = response.data.map((task) => ({
        _id: task._id,
        title: task.title,
        isDone: task.isDone,
      }));
      set({ posts: formattedPosts });
    } catch (error) {
      console.error(
        "Error fetching tasks:",
        error.response?.data || error.message
      );
    }
  },

  addPost: async (post) => {
    try {
      const response = await api.post("/tasks", post);
      console.log("Added task:", response);
      const newPost = {
        _id: response.data._id,
        title: response.data.title,
        isDone: response.data.isDone,
      };
      set((state) => ({
        posts: [...state.posts, newPost],
      }));
    } catch (error) {
      console.error(
        "Error adding task:",
        error?.response?.data || error.message
      );
    }
  },

  updatePost: async (id, updatedPost) => {
    try {
      const response = await api.patch(`/tasks/${id}/done`, updatedPost);
      console.log("Updated task:", response);
      set((state) => ({
        posts: state.posts.map((post) =>
          post._id === id ? { ...post, isDone: response.isDone } : post
        ),
      }));
    } catch (error) {
      console.error(
        "Error updating task:",
        error?.response?.data || error.message
      );
    }
  },

  deletePost: async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      set((state) => ({
        posts: state.posts.filter((post) => post._id !== id),
      }));
    } catch (error) {
      console.error(
        "Error deleting task:",
        error?.response?.data || error.message
      );
    }
  },
}));
