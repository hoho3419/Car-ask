import React from "react";
import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <AdminContainer>
      <AdminHeader>
        <img src="/leenkim.png" alt="로고" />
        <div>
          <button>로그아웃</button>
        </div>
      </AdminHeader>
      <AdminBody>
        <AdminAside>
          <span>문의 관리</span>
        </AdminAside>
        <AdminContent>
          <header>문의 관리</header>
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
    padding: 1rem 2rem;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.main};
    font-weight: 900;
    color: #fff;
    border: none;
    cursor: pointer;
    &:hover {
      color: #000;
    }
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
  header {
    padding: 1.2rem 3rem;
    font-size: 1.5rem;
    border-bottom: 1px solid #ddd;
    font-weight: 900;
  }
`;

// const AdminSection = styled.section``;
