import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { AxiosError } from "axios";
import api from "@/lib/axios";

interface RegisterPayload {
  username: string;
  email: string;
  password: string;
}

interface AuthState {
  token: string | null;
  username: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  
  login: (username: string, password: string) => Promise<void>;
  register: (data: RegisterPayload) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      username: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (username, password) => {
        set({ isLoading: true, error: null });
        try {
          const response = await api.post("/auth/login", { username, password });
          set({ 
            token: response.data.token, 
            username: username,
            isAuthenticated: true, 
            isLoading: false 
          });
        } catch (err) {
          const error = err as AxiosError<{ message: string }>;
          set({ 
            isLoading: false, 
            error: error.response?.data?.message || "Login failed." 
          });
          throw err;
        }
      },

      register: async (data) => {
        set({ isLoading: true, error: null });
        try {
          await api.post("/users", {
            email: data.email,
            username: data.username,
            password: data.password,
          });
          
          set({ isLoading: false, error: null });
        } catch (err) {
          const error = err as AxiosError<{ message: string }>;
          set({ 
            isLoading: false, 
            error: error.message || "Registration failed." 
          });
          throw err;
        }
      },

      logout: () => {
        set({ token: null, username: null, isAuthenticated: false, error: null });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ 
        token: state.token, 
        username: state.username, 
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);