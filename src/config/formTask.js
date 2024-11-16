import { create } from "zustand";

export const useFormTask = create((set) => ({
  form: {
    title: "",
  },
  setFormData: (formtype, formValue) =>
    set((state) => ({
      form: { ...state.form, [formtype]: formValue },
    })),
}));
