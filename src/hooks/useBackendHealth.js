import { useQuery } from "@tanstack/react-query";
import axiosClient from "../api/axiosClient";

export const useBackendHealth = () => {
  return useQuery({
    queryKey: ["health"],
    queryFn: async () => {
      const res = await axiosClient.get("/health");
      return res.data;
    },
    retry: true,
    retryDelay: 3000,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
};
