import axiosClient from "./axiosClient";

export const checkHealth = async () => {
  const res = await axiosClient.get("/health");
  return res.data;
};
