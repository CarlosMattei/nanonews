import { create } from "zustand";
import { persist } from "zustand/middleware";

// Interface para o usuário
export interface User {
  id: string;
  name?: string;
  email: string;
  password?: string;
  profile_picture?: string;
  [key: string]: any;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
  isAuthenticated: boolean;
}


export const useUserStore = create<UserState>()(
  // Funcionalidade de persistência para deixar os dados sallvos
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      setUser: (user: User) => set({ user, isAuthenticated: true }),
      clearUser: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "user-storage", // Como fica o nome no localStorage
    }
  )
);
