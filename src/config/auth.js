import { create } from "zustand";
import { axiosInstance } from "../config/axiosInstance";
import { saveAccessToken, removeAccessToken } from "../utils/tokenManager";

export const useAuth = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,

  login: async (email, password) => {
    try {
      const { data } = await axiosInstance.post("/users/login", {
        email,
        password,
      });
      saveAccessToken(data.token);
      const userData = data.user;
      localStorage.setItem("user", JSON.stringify(userData));
      set({ user: userData });
      return userData;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error);
      throw new Error("Invalid email or password");
    }
  },

  logout: () => {
    removeAccessToken();
    localStorage.removeItem("user");
    set({ user: null });
  },

  refreshUser: async () => {
    try {
      const { data } = await axiosInstance.get("/users/profile");
      localStorage.setItem("user", JSON.stringify(data));
      set({ user: data });
    } catch (error) {
      console.error("Failed to refresh user:", error.response?.data || error);
    }
  },
}));
