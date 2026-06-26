import { api } from "@/src/services/api";
import { LoginRequest, LoginResponse } from "../types/types";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
