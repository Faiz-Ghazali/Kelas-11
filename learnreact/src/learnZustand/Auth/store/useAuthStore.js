import { create } from "zustand";

const useAuthStore = create((set) => ({
  username: "riko",
  role: "user",
  count: 3,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
export default useAuthStore;
//! zustand adalah library untuk membantu membuat dan mengelola share/global state
//! create() digunakan untuk membuat store zustand
//! set adalah fungsi yang disediakan oleh zustand untuk mengubah state di dalam store
