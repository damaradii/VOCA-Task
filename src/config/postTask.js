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
  addPost: (post) => {
    set((state) => ({
      posts: [
        ...state.posts,
        {
          ...post,
          _id: state.posts.length + 1,
        },
      ],
    }));
  },
  updatePost: (id, updatedPost) => {
    set((state) => ({
      posts: state.posts.map((post) =>
        post._id == id
          ? {
              ...post,
              ...updatedPost,
            }
          : post
      ),
    }));
  },
}));

export default usePostTask;
