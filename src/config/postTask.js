import { create } from "zustand";
import { axiosInstance as api } from "./axiosInstance";

export const usePostTask = create((set) => ({
  posts: [],

  getPosts: async () => {
    try {
      const response = await api.get("/tasks");
      set({ posts: response.data });
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  },

  addPost: async (post) => {
    try {
      const { data } = await api.post("/tasks", {
        title: post.title,
      });

      set((state) => ({
        posts: [...state.posts, data],
      }));
    } catch (error) {
      console.error(error);
    }
  },

  updatePost: async (id, updatedPost) => {
    try {
      const { data } = await api.patch(`/tasks/${id}/done`, updatedPost);

      set((state) => ({
        posts: state.posts.map((post) =>
          post._id === id ? { ...post, ...data } : post
        ),
      }));

      console.log("Task updated successfully:", data);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  },

  deletePost: async (id, deletePost) => {
    try {
      await api.delete(`/tasks/${id}`);
      set((state) => ({
        posts: state.posts.filter((post) => post._id !== id),
      }));
    } catch (error) {
      console.error("Error deleting task", error);
    }
  },
}));
