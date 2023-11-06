import styled from "@emotion/styled";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { login } from "../api";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const nav = useNavigate();
  const { mutate } = useMutation({
    mutationFn: login,
    onSuccess: () => {
      nav("/adm/email");
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    // event.target으로 form안에 있는 정보들을 new FormData를 이용해 새로운 객체를 만들면서 전부 수집한다
    // formData 객체로 데이터를 모은 것들을 Object.fromEntries를 사용해서 자바스크립트 객체로 변환한다.
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    mutate(data);
  };

  return (
    <LoginContainer>
      <LoginBox onSubmit={submitHandler}>
        <img
          src="/leenkim.png"
          alt="로고"
          style={{ width: "10rem", marginTop: "10rem" }}
        />
        <input type="text" name="email" id="email" />
        <input type="text" name="password" id="password" />
        <button>로그인</button>
      </LoginBox>
    </LoginContainer>
  );
};

export default AdminLogin;

const LoginContainer = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 80%;
    height: 2rem;
    padding: 1rem;
    font-size: 1.5rem;
    border-radius: 10px;
    margin: 1rem 0;
    text-align: left;
  }
  button {
    width: 80%;
    background-color: #0c4da2;
    border-radius: 10px;
    font-size: 2rem;
    padding: 1rem;
    margin-top: 1rem;
    color: #fff;
    font-weight: 900;
    cursor: pointer;
    &:hover {
      background-color: #06244b;
    }
  }
`;
