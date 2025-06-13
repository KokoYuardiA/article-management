import axiosInstance from "../lib/axiosInstance";

export async function loginUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  try {
    const res = await axiosInstance.post("/auth/login", { username, password });
    return res.data; // { token: "string" }
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Login failed");
  }
}

export async function registerUser({
  username,
  password,
  role,
}: {
  username: string;
  password: string;
  role: "User" | "Admin";
}) {
  try {
    const res = await axiosInstance.post("/auth/register", { username, password, role });
    return res.data;
  } catch (err: any) {
    throw new Error(err.response?.data?.message || "Register failed");
  }
}

export async function getProfile(token: string) {
  const res = await axiosInstance.get("/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data; // { id, username, role }
}