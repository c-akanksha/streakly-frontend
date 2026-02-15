import { useMutation } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

export const useSignup = () =>
  useMutation({
    mutationFn: async (userData) => {
      const res = await axiosClient.post("/api/auth/signup", userData);
      return res.data;
    },
  });

export const useLogin = () =>
  useMutation({
    mutationFn: async (credentials) => {
      const res = await axiosClient.post("/api/auth/login", credentials);
      localStorage.setItem("token", res.data.token);
      return res.data;
    },
  });
