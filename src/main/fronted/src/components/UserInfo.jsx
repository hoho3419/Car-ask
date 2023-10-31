import styled from "@emotion/styled";
import React, { useContext, useEffect } from "react";
import TopBar from "./TopBar";
import { Btn } from "./Identities";
import { MailInfoContext } from "../store";

const UserInfo = ({ mainColor }) => {
  const { name, setName, phoneNumber, setPhoneNumber } =
    useContext(MailInfoContext);

  const isButtonDisabled = !name || !phoneNumber;

  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  };

  useEffect(() => {
    let formattedPhoneNumber = "";

    if (phoneNumber.length === 11) {
      formattedPhoneNumber = formatPhoneNumber(phoneNumber);
      setPhoneNumber(formattedPhoneNumber);
    }
  }, [phoneNumber]);

  return (
    <>
      <TopBar />
      <InfoContainer>
        <Title>
          <h2>
            <img src="/lee/006.png" alt="아이콘" style={{ width: "4rem" }} />
            이름과 연락처 알려주세요
          </h2>
          <span>보다 정확한 상담을 위해 정보를 남겨주세요</span>
        </Title>
        <InfoBox>
          <InputBox>
            <span>이름</span>
            <input
              type="text"
              name="name"
              id="name"
              maxLength={20}
              placeholder="이름 입력"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputBox>
          <InputBox>
            <span>휴대폰 번호</span>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="010-1234-5678"
              maxLength={13}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </InputBox>
        </InfoBox>
        <PrivacyBox>
          <input type="checkbox" name="agree" id="agree" />
          <label htmlFor="agree">개인정보 수집 및 이용 동의</label>
          <button>자세히 보기 〉</button>
        </PrivacyBox>
        <Btn style={{ background: isButtonDisabled ? "#99a2ac" : mainColor }}>
          다음
        </Btn>
      </InfoContainer>
    </>
  );
};

export default UserInfo;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 4rem 2rem;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  span {
    font-size: 1.5rem;
    color: #222121;
  }
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 2rem 0;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  padding: 1.5rem 2rem;
  border-radius: 10px;
  span {
    font-size: 1.1rem;
    color: #a39c9c;
    font-weight: 900;
  }
  input {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.3rem;
    font-weight: 700;
    text-align: left;
    padding: 0;
    margin-top: 0.4rem;
  }
  select {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.3rem;
    padding: 0;
    margin-top: 0.4rem;
    font-weight: 500;
    transform: translateX(-5px);
  }
`;
const PrivacyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.4rem;
  padding: 0 0.4rem;
  input {
    width: 1.3rem;
    height: 1.3rem;
    accent-color: #000;
  }
  label {
    font-size: 1.3rem;
    cursor: pointer;
    user-select: none;
  }
  button {
    background-color: #fff;
    border: 1px solid #c2b8b8;
    padding: 0.9rem;
    border-radius: 5px;
    font-size: 1.2rem;
    margin-left: 2rem;
    cursor: pointer;
  }
`;
