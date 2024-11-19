import { create } from "zustand";
import { axiosInstance as api } from "../config/axiosInstance";

export const useUsersPosts = create((set) => ({
  user: null,

  fetchUser: async () => {
    try {
      const response = await api.get("/users/profile");
      set({ user: response.data });
    } catch (error) {
      console.error("Error fetching user:", error.response?.data || error);
    }
  },

  updateUser: async (updatedData) => {
    try {
      const response = await api.put("/users/profile", updatedData);
      set({ user: response.data });
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error.response?.data || error);
      throw error;
    }
  },
}));
