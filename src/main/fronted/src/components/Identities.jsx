import React, { useContext } from "react";
import { MailInfoContext } from "../store";
import styled from "@emotion/styled";
import BottomBar from "./UI/BottomBar";

const Identities = ({ mainColor }) => {
  const { setSequence, identity, setIdentity } = useContext(MailInfoContext);

  const handleOptionChange = (event) => {
    setIdentity(event.target.value);
  };

  const isButtonDisabled = !identity;

  const nextPageHandler = () => {
    setSequence("2");
  };

  return (
    <>
      <IdenContainer>
        <h2>
          <img src="/lee/001.png" alt="체크아이콘" style={{ width: "3rem" }} />
          구분
        </h2>
        <p>해당되는 항목을 선택해주세요</p>
        <SelectBox>
          <Label
            htmlFor="iden1"
            style={{
              background: identity === "개인" ? mainColor : "#f8f8f8",
              color: identity === "개인" ? "#fff" : "#000",
            }}
          >
            <input
              type="radio"
              id="iden1"
              name="identity"
              value="개인"
              checked={identity === "개인"}
              onChange={handleOptionChange}
            />
            <img src="/lee/002.png" alt="아이콘" />
            <span>개인</span>
          </Label>
          <Label
            htmlFor="iden2"
            style={{
              background: identity === "개인사업자" ? mainColor : "#f8f8f8",
              color: identity === "개인사업자" ? "#fff" : "#000",
            }}
          >
            <input
              type="radio"
              id="iden2"
              name="identity"
              value="개인사업자"
              checked={identity === "개인사업자"}
              onChange={handleOptionChange}
            />
            <img src="/lee/003.png" alt="아이콘" />
            <span>개인사업자</span>
          </Label>
          <Label
            htmlFor="iden3"
            style={{
              background: identity === "법인사업자" ? mainColor : "#f8f8f8",
              color: identity === "법인사업자" ? "#fff" : "#000",
            }}
          >
            <input
              type="radio"
              id="iden3"
              name="identity"
              value="법인사업자"
              checked={identity === "법인사업자"}
              onChange={handleOptionChange}
            />
            <img src="/lee/004.png" alt="아이콘" />
            <span>법인사업자</span>
          </Label>
        </SelectBox>
        <Btn
          disabled={isButtonDisabled}
          style={{ background: isButtonDisabled ? "#99a2ac" : mainColor }}
          onClick={nextPageHandler}
        >
          선택
        </Btn>
      </IdenContainer>
      <BottomBar onNext={isButtonDisabled ? null : nextPageHandler}>
        <img src="/lee/005.png" alt="아이콘" style={{ width: "5rem" }} />
        <span>이름</span>
        <span>/</span>
        <span>연락처</span>
      </BottomBar>
    </>
  );
};

export default Identities;

const IdenContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 7rem 2rem 4rem 2rem;
  box-sizing: border-box;
  h2 {
    font-size: 2.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  p {
    font-size: 1.5rem;
    padding: 1rem 0;
    margin: 1rem 0 1rem 0;
  }
  animation: page_slide-down 0.5s ease-out forwards;
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 2rem 3rem;
  box-sizing: border-box;
  margin-top: 1rem;
  border-radius: 0.375rem;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.08);
  font-size: 1.2rem;
  text-align: center;
  outline: solid 1px #f8f8f8;
  cursor: pointer;
  transition: all 0.2s;
  input {
    display: none;
  }
  img {
    width: 8rem;
  }
  :hover {
    background-color: #0c4da2 !important;
    color: #f8f8f8 !important;
  }

  @media screen and (max-width: 460px) {
    padding: 1.7rem 2rem;
  }
  @media screen and (max-width: 400px) {
    padding: 1.7rem 1rem;
  }
  @media screen and (max-width: 360px) {
    padding: 1.7rem 1rem;
    img {
      width: 7rem;
    }
  }
  @media screen and (max-width: 340px) {
    padding: 1.7rem 0.7rem;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  padding: 1.5rem 4rem;
  font-size: 1.6rem;
  background-color: #99a2ac;
  color: #fff;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
`;
