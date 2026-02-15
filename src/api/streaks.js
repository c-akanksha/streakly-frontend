import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

export const useStreaks = () =>
  useQuery({
    queryKey: ["streaks"],
    queryFn: async () => {
      const res = await axiosClient.get("/api/streaks");
      return res.data;
    },
  });

export const useCreateStreak = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newStreak) => {
      const res = await axiosClient.post("/api/streaks", newStreak);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["streaks"] });
    },
  });
};

export const useMarkDone = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      const res = await axiosClient.put(`/api/streaks/${id}/done`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["streaks"] });
    },
  });
};
