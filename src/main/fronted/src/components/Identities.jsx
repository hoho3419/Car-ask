import React, { useContext } from "react";
import { MailInfoContext } from "../store";
import styled from "@emotion/styled";
import BottomBar from "./BottomBar";

const Identities = ({ mainColor }) => {
  const { identity, setIdentity } = useContext(MailInfoContext);

  const handleOptionChange = (event) => {
    setIdentity(event.target.value);
  };

  const isButtonDisabled = !identity;

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
            style={{ background: identity === "개인" ? mainColor : "#f8f8f8" }}
          >
            <input
              type="radio"
              name="identity"
              value="개인"
              checked={identity === "개인"}
              onChange={handleOptionChange}
            />
            <img src="/lee/002.png" alt="아이콘" />
            <span>개인</span>
          </Label>
          <Label
            style={{
              background: identity === "개인사업자" ? mainColor : "#f8f8f8",
            }}
          >
            <input
              type="radio"
              name="identity"
              value="개인사업자"
              checked={identity === "개인사업자"}
              onChange={handleOptionChange}
            />
            <img src="/lee/003.png" alt="아이콘" />
            <span>개인사업자</span>
          </Label>
          <Label
            style={{
              background: identity === "법인사업자" ? mainColor : "#f8f8f8",
            }}
          >
            <input
              type="radio"
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
        >
          선택
        </Btn>
      </IdenContainer>
      <BottomBar />
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
  background: #f8f8f8;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.08);
  color: #000;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
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
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  padding: 1.5rem 4rem;
  font-size: 1.6rem;
  font-weight: 900;
  background-color: #99a2ac;
  color: #fff;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
`;