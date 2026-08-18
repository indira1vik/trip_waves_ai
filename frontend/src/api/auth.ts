import apiClient from "./client";

export interface SignupPayload {
    name: string;
    email: string;
    password: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export interface AuthResponse {
  user_id: number;
  name?: string;
  email?: string;
  message: string;
}

export async function signup(data:SignupPayload): Promise<AuthResponse> {
    const res = await apiClient.post<AuthResponse>("/auth/signup", {
        name: data.name,
        email: data.email,
        password: data.password,
    });

    return res.data;
}

export async function login(data: LoginPayload): Promise<AuthResponse> {
  const response = await apiClient.post<AuthResponse>("/auth/check", {
    email: data.email,
    password: data.password,
  });
  
  return response.data;
}