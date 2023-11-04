import React, { useContext } from "react";
import TopBar from "./UI/TopBar";
import { Left, Title } from "./UserInfo";
import styled from "@emotion/styled";
import { MailInfoContext } from "../store";
import { Btn } from "./Identities";
import BottomBar from "./UI/BottomBar";

const CarCondition = ({ mainColor }) => {
  const {
    setSequence,
    leaseMonths,
    setLeaseMonths,
    deliverDate,
    setDeliverDate,
  } = useContext(MailInfoContext);

  const isButtonDisabled = !leaseMonths || !deliverDate;

  const handleaseChange = (event) => {
    setLeaseMonths(event.target.value);
  };

  const handledeliverChange = (event) => {
    setDeliverDate(event.target.value);
  };

  const prePageHandler = () => {
    setSequence("3");
  };

  const nextPageHandler = () => {
    setSequence("5");
  };

  return (
    <>
      <TopBar onPrev={prePageHandler}>
        <Left>
          <img src="/lee/007.png" alt="아이콘" style={{ width: "6rem" }} />
          <span>차량 선택</span>
        </Left>
        <img src="/lee/010.png" alt="아이콘" style={{ width: "5rem" }} />
      </TopBar>
      <ConditionContainer>
        <Title>
          <h2>
            <img src="/lee/012.png" alt="아이콘" style={{ width: "3.5rem" }} />
            차량 조건
          </h2>
          <span>리스 개월 수와 출고 시기를 알려주세요</span>
        </Title>
        <CondContainer>
          <CondBox>
            <p>개월 수</p>
            <div>
              <InputBox>
                <input
                  type="radio"
                  name="leaseMonths"
                  value={"36개월"}
                  id="option1"
                  onChange={handleaseChange}
                />
                <label htmlFor="option1">36개월</label>
              </InputBox>
              <InputBox>
                <input
                  type="radio"
                  name="leaseMonths"
                  value={"48개월"}
                  id="option2"
                  onChange={handleaseChange}
                />
                <label htmlFor="option2">48개월</label>
              </InputBox>
              <InputBox>
                <input
                  type="radio"
                  name="leaseMonths"
                  value={"60개월"}
                  id="option3"
                  onChange={handleaseChange}
                />
                <label htmlFor="option3">60개월</label>
              </InputBox>
            </div>
          </CondBox>
          <CondBox>
            <p>출고시기</p>
            <div>
              <InputBox>
                <input
                  type="radio"
                  name="deliverDate"
                  value={"즉시"}
                  id="option4"
                  onChange={handledeliverChange}
                />
                <label htmlFor="option4">즉시</label>
              </InputBox>
              <InputBox>
                <input
                  type="radio"
                  name="deliverDate"
                  value={"한달 이내"}
                  id="option5"
                  onChange={handledeliverChange}
                />
                <label htmlFor="option5">한 달 이내</label>
              </InputBox>
              <InputBox>
                <input
                  type="radio"
                  name="deliverDate"
                  value={"관계 없음"}
                  id="option6"
                  onChange={handledeliverChange}
                />
                <label htmlFor="option6">관계없음</label>
              </InputBox>
            </div>
          </CondBox>
          <Btn
            disabled={isButtonDisabled}
            style={{ background: isButtonDisabled ? "#99a2ac" : mainColor }}
            onClick={nextPageHandler}
          >
            다음
          </Btn>
        </CondContainer>
      </ConditionContainer>
      <BottomBar onNext={isButtonDisabled ? null : nextPageHandler}>
        <img src="/lee/008.png" alt="아이콘" style={{ width: "3.5rem" }} />
        <span>초기 비용</span>
      </BottomBar>
    </>
  );
};

export default CarCondition;

const ConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0rem 2rem;
  animation: page_slide-down 0.5s ease-out forwards;
`;

const CondContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  gap: 1rem;
`;
const CondBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  padding: 1rem 1.3rem;
  border-radius: 10px;
  p {
    color: #565656;
    font-size: 1.3rem;
    font-family: ONE_Mobile_Regular;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;
const InputBox = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  input[type="radio"] {
    width: 1rem; /* 가로 크기 조절 */
    height: 1rem; /* 세로 크기 조절 */
    margin: 0;
  }

  /* 라디오 버튼 컨테이너를 정사각형으로 만들기 위한 스타일 */
  input[type="radio"]::before {
    content: ""; /* 가상 요소를 생성합니다. */
    display: inline-block;
    width: 100%;
    height: 100%;
    border: 1px solid #565656; /* 테두리 스타일 및 색상 설정 */
    border-radius: 0; /* 테두리 모서리를 둥글지 않게 만듭니다. */
    background-color: #fff; /* 배경색을 지정합니다. */
  }
  /* 선택된 라디오 버튼 스타일 */
  input[type="radio"]:checked::before {
    background-color: #000; /* 선택된 라디오 버튼의 배경색을 변경합니다. */
    border-color: #000; /* 선택된 라디오 버튼의 테두리 색상을 변경합니다. */
  }
  label {
    font-size: 1.5rem;
    color: #565656;
    margin: 0 1rem;
    font-family: ONE_Mobile_Regular;
  }
`;
