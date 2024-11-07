import { create } from "zustand";

const dummyTask = [
  { _id: 1, title: "task 1" },
  { _id: 2, title: "task 2" },
  { _id: 3, title: "task 3" },
  { _id: 4, title: "task 4" },
];

const usePostTask = create((set, get) => ({
  posts: [],
  getPosts: () => {
    set({ posts: dummyTask });
  },
  getPostsById: (id) => {
    return get().posts.find((post) => post._id == id);
  },
}));

export default usePostTask;
