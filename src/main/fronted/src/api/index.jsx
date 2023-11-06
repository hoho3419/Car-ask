import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8111/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const emailSender = async (emailData) => {
  try {
    console.log(emailData);
    const data = await apiClient.post("/email", emailData);
    console.log(data.data);
  } catch (e) {
    console.log(e.message);
    throw new Error(e.message);
  }
};

export const login = async (userData) => {
  try {
    const data = await apiClient.post("/auth/login", userData);
    console.log(data.data);
    const token = data.data;
    localStorage.setItem("token", JSON.stringify(token));
  } catch (e) {
    console.log(e.message);
    throw new Error(e.message);
  }
};
