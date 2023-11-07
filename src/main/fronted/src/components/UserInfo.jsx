import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import TopBar from "./UI/TopBar";
import { Btn } from "./Identities";
import { MailInfoContext } from "../store";
import BottomBar from "./UI/BottomBar";
import { Link } from "react-router-dom";

const UserInfo = ({ mainColor }) => {
  const { setSequence, name, setName, phoneNumber, setPhoneNumber } =
    useContext(MailInfoContext);
  const [checked, setChecked] = useState(true);

  const isButtonDisabled = !name || !phoneNumber || !checked;

  useEffect(() => {
    let formattedPhoneNumber = "";

    if (phoneNumber.length === 11) {
      formattedPhoneNumber = formatPhoneNumber(phoneNumber);
      setPhoneNumber(formattedPhoneNumber);
    }
  }, [phoneNumber]);

  const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
  };
  const prePageHandler = () => {
    setSequence("1");
  };

  const nextPageHandler = () => {
    setSequence("3");
  };
  const toggleHandler = () => {
    setChecked(!checked);
  };

  return (
    <>
      <TopBar onPrev={prePageHandler}>
        <Left>
          <img src="/lee/011.png" alt="아이콘" style={{ width: "5rem" }} />
          <span>구분 선택</span>
        </Left>
        <img src="/lee/010.png" alt="아이콘" style={{ width: "5rem" }} />
      </TopBar>
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
          <input
            type="checkbox"
            name="agree"
            id="agree"
            checked={checked}
            onChange={toggleHandler}
          />
          <label htmlFor="agree">개인정보 수집 및 이용 동의</label>
          <Link to={"/privacy"} target="_blank">
            자세히 보기 〉
          </Link>
        </PrivacyBox>
        <Btn
          disabled={isButtonDisabled}
          style={{ background: isButtonDisabled ? "#99a2ac" : mainColor }}
          onClick={nextPageHandler}
        >
          다음
        </Btn>
      </InfoContainer>
      <BottomBar onNext={isButtonDisabled ? null : nextPageHandler}>
        <img src="/lee/007.png" alt="아이콘" style={{ width: "4rem" }} />
        <span>차량 선택</span>
      </BottomBar>
    </>
  );
};

export default UserInfo;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0rem 2rem;
  animation: page_slide-down 0.5s ease-out forwards;
`;

export const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.6rem;
  }
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
    font-family: ONE_Mobile_Regular;
    font-size: 1.5rem;
    color: #3f3f3f;
  }
  p {
    margin-top: 1rem;
    color: #0c4da2;
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
    font-size: 1.2rem;
    color: #565656;
    font-family: ONE_Mobile_Regular;
  }
  input {
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.4rem;
    text-align: left;
    padding: 0;
    margin-top: 0.4rem;
    font-family: ONE_Mobile_Regular;
    color: #000;
  }
  select {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.4rem;
    margin-top: 0.4rem;
    font-family: ONE_Mobile_Regular;
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
    font-size: 1.2rem;
    cursor: pointer;
    user-select: none;
  }
  a {
    background-color: #fff;
    border: 1px solid #c2b8b8;
    padding: 0.9rem;
    border-radius: 5px;
    font-size: 1.1rem;
    margin-left: 2rem;
    cursor: pointer;
  }
`;
