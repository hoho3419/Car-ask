import React from "react";
import styled from "@emotion/styled";
import { Outlet, useNavigate } from "react-router-dom";
import ExcelDownload from "../admin/ExcelDownload";

const AdminLayout = () => {
  const nav = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    nav("/adm");
  };
  return (
    <AdminContainer>
      <AdminHeader>
        <img
          src="/leenkim.png"
          alt="로고"
          onClick={() => nav("/adm/email")}
          style={{ cursor: "pointer" }}
        />
        <div>
          <button onClick={logoutHandler}>로그아웃</button>
        </div>
      </AdminHeader>
      <AdminBody>
        <AdminAside>
          <span>문의 관리</span>
        </AdminAside>
        <AdminContent>
          <header>
            <span>문의 관리</span>
            <ExcelDownload />
          </header>
          <Outlet />
        </AdminContent>
      </AdminBody>
    </AdminContainer>
  );
};

export default AdminLayout;

const AdminContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
  overflow-y: overlay;
  overflow-x: hidden;
`;
const AdminHeader = styled.header`
  width: 100%;
  height: 5rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;
  img {
    width: 5rem;
    color: #fff;
    background-color: #fff;
  }
  button {
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: ${({ theme }) => theme.color.main};
  }
`;
const AdminBody = styled.div`
  display: flex;
  width: 100%;
`;

const AdminAside = styled.aside`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: auto;
  border-right: 1px solid #ddd;
  span {
    font-size: 1.4rem;
    padding: 1rem 0;
    text-align: center;
    border-bottom: 1px solid #ddd;
    width: 100%;
  }
`;

const AdminContent = styled.div`
  flex: 10;
  display: flex;
  flex-direction: column;
  position: relative;
  header {
    display: flex;
    justify-content: space-between;
    padding: 1.2rem 3rem;
    font-size: 1.5rem;
    border-bottom: 1px solid #ddd;
    font-weight: 900;
    button {
      font-size: 1.1rem;
      padding: 0.3rem 0.5rem;
      border: none;
      border-radius: 5px;
      color: #fff;
      background-color: #09915c;
    }
  }
`;
