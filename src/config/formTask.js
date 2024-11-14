import { create } from "zustand";

const useFormTask = create((set) => ({
  form: {
    title: "",
  },
  setFormData: (formtype, formValue) =>
    set((state) => ({
      form: { ...state.form, [formtype]: formValue },
    })),
}));

export default useFormTask;
