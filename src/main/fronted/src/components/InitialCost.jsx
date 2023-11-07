import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Title } from "./UserInfo";
import { MailInfoContext } from "../store";
import { Btn } from "./Identities";
import BottomBar from "./UI/BottomBar";
import TopBar from "./UI/TopBar";

const InitialCost = ({ mainColor }) => {
  const { setSequence, deposit, setDeposit, initialCost, setInitialCost } =
    useContext(MailInfoContext);

  const isButtonDisabled = !deposit || !initialCost;

  const depositFormat = (e) => {
    const depositformat = e.target.value.replace(",", "");
    const deformat = (+depositformat).toLocaleString("ko-KR");
    setDeposit(deformat === "NaN" ? "0" : deformat);
  };
  const initCostFormat = (e) => {
    const initCostformat = e.target.value.replace(",", "");
    const initCost = (+initCostformat).toLocaleString("ko-KR");
    setInitialCost(initCost === "NaN" ? "0" : initCost);
  };

  const prePageHandler = () => {
    setSequence("4");
  };

  const nextPageHandler = () => {
    setSequence("6");
  };

  return (
    <>
      <TopBar onPrev={prePageHandler}>
        <Left>
          <img src="/lee/012.png" alt="아이콘" style={{ width: "5rem" }} />
          <span>차량 조건</span>
        </Left>
        <img src="/lee/010.png" alt="아이콘" style={{ width: "5rem" }} />
      </TopBar>
      <InitialContainer>
        <Title>
          <h2>
            <img src="/lee/008.png" alt="아이콘" style={{ width: "3.5rem" }} />
            초기 비용
          </h2>
          <span>차량 이용시 초기비용을 알려주세요</span>
          <p>* 무보증 조건일 경우 0을 입력 해주세요.</p>
        </Title>
        <CostContainer>
          <CostBox>
            <span>보증금</span>
            <div>
              <input
                type="text"
                name="deposit"
                id="deposit"
                value={deposit}
                onChange={depositFormat}
              />
              만원
            </div>
          </CostBox>
          <CostBox>
            <span>선수금</span>
            <div>
              <input
                type="text"
                name="initialCost"
                id="initialCost"
                value={initialCost}
                onChange={initCostFormat}
              />
              만원
            </div>
          </CostBox>
        </CostContainer>
        <Btn
          disabled={isButtonDisabled}
          style={{ background: isButtonDisabled ? "#99a2ac" : mainColor }}
          onClick={nextPageHandler}
        >
          다음
        </Btn>
      </InitialContainer>
      <BottomBar onNext={isButtonDisabled ? null : nextPageHandler}>
        <img src="/lee/009.png" alt="아이콘" style={{ width: "3.5rem" }} />
        <span>상세 내용</span>
      </BottomBar>
    </>
  );
};

export default InitialCost;

const InitialContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0rem 2rem;
  animation: page_slide-down 0.5s ease-out forwards;
`;

const CostContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  @media screen and (max-width: 460px) {
    flex-wrap: wrap;
  }
`;

const CostBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
  width: calc(50%);
  background-color: #f8f8f8;
  padding: 1rem 1rem;
  margin: 1rem;
  border-radius: 10px;
  font-size: 1.3rem;

  span {
    font-size: 1.3rem;
    color: #565656;
    font-family: ONE_Mobile_Regular;
  }
  input {
    border: none;
    background-color: transparent;
    outline: none;
    text-align: right;
  }
  div {
    width: 100%;
    text-align: right;
    display: flex;
    justify-content: right;
    align-items: end;
    gap: 20px;
    font-size: 1.5rem;
    vertical-align: middle;
    color: #565656;
    font-family: ONE_Mobile_Regular;
    input {
      width: 15rem;
      font-size: 4rem;
      box-sizing: border-box;
      vertical-align: bottom;
      color: #565656;
    }
  }
  @media screen and (max-width: 460px) {
    width: 100%;
    input {
      width: 18rem !important;
    }
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.6rem;
  }
`;
