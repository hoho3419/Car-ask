import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Title } from "./UserInfo";
import { MailInfoContext } from "../store";
import { Btn } from "./Identities";

const InitialCost = ({ mainColor }) => {
  const { deposit, setDeposit, initialCost, setInitialCost } =
    useContext(MailInfoContext);

  const isButtonDisabled = !deposit || !initialCost;

  const depositformat = deposit.replace(",", "");
  const initialCostformat = initialCost.replace(",", "");

  const deformat = (+depositformat).toLocaleString("ko-KR");
  const informat = (+initialCostformat).toLocaleString("ko-KR");

  return (
    <>
      <TopBar />
      <InitialContainer>
        <Title>
          <h2>
            <img src="/lee/008.png" alt="아이콘" style={{ width: "3.5rem" }} />
            초기 비용
          </h2>
          <span>차량 이용시 초기비용을 알려주세요</span>
        </Title>
        <CostContainer>
          <CostBox>
            <span>보증금</span>
            <div>
              <input
                type="text"
                name="deposit"
                id="deposit"
                value={deformat}
                onChange={(e) => setDeposit(e.target.value)}
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
                value={informat}
                onChange={(e) => setInitialCost(e.target.value)}
              />
              만원
            </div>
          </CostBox>
        </CostContainer>
        <Btn style={{ background: isButtonDisabled ? "#99a2ac" : mainColor }}>
          다음
        </Btn>
      </InitialContainer>
    </>
  );
};

export default InitialCost;

const InitialContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 4rem 2rem;
`;

const CostContainer = styled.div`
  display: flex;
  justify-content: center;
  /* gap: 0.8rem; */
  margin: 2rem 0;
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
    font-size: 1.4rem;
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
    input {
      width: 15rem;
      font-size: 4rem;
      box-sizing: border-box;
      vertical-align: bottom;
    }
  }
`;

const TopBar = () => {
  return (
    <TopContainer>
      <Left>
        <img src="/lee/007.png" alt="아이콘" style={{ width: "6rem" }} />
        <span>차량 선택</span>
      </Left>
      <img src="/lee/010.png" alt="아이콘" style={{ width: "5rem" }} />
    </TopContainer>
  );
};

const TopContainer = styled.div`
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(236, 245, 255, 1);
  margin: 9rem 2rem 2rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.6rem;
    font-weight: 900;
  }
`;
