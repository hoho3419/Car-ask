import axios from "axios";

const apiClient = axios.create({
  //   baseURL: "http://localhost:8111/",
  headers: {
    "Content-Type": "application/json",
  },
});
//  문의사항 전송
export const emailSender = async (emailData) => {
  try {
    const data = await apiClient.post("/email", emailData);
  } catch (e) {
    console.log(e.message);
    throw new Error(e.message);
  }
};
//  관리자 로그인
export const login = async (userData) => {
  try {
    const data = await apiClient.post("/auth/login", userData);
    const token = data.data;
    const access_token = token.accessToken;
    localStorage.setItem("access_token", JSON.stringify(access_token));
  } catch (e) {
    console.log(e.message);
    throw new Error(e.message);
  }
};
// DB에 있는 고객 데이터 불러오기
export const excelSave = async () => {
  try {
    const data = await apiClient.post("/admin/read-all/save");
    return data.data;
  } catch (e) {
    console.log(e.message);
    throw new Error(e.message);
  }
};
// 문의내역 리스트 전부 불러오기
export const fetchEamils = async ({ signal }) => {
  try {
    const data = await apiClient.get("/admin/read-all", { signal });
    return data.data;
  } catch (e) {
    console.log(e.message);
    throw new Error(e.message);
  }
};

// 해당 문의내역 불러오기
export const fetchEamil = async ({ id, signal }) => {
  try {
    const data = await apiClient.post(`/admin/read/${id}`, { signal });
    return data.data;
  } catch (e) {
    console.log(e.message);
    throw new Error(e.message);
  }
};

// 요청마다 토큰이 존재하면 추가해서 보냄
apiClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken && config.headers) {
    const token = accessToken.replace("'", "").replace('"', "");
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
