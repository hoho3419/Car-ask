import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import { Title } from "./UserInfo";
import { MailInfoContext } from "../store";
import { Btn } from "./Identities";
import TopBar from "./UI/TopBar";

const DetailInfo = ({ mainColor }) => {
  const {
    identity,
    name,
    phoneNumber,
    brand,
    modelName,
    deposit,
    initialCost,
    contactTime,
    questions,
    setContactTime,
    setSequence,
    setQuestions,
    setModalSucess,
  } = useContext(MailInfoContext);
  const [startTime, setStartTime] = useState("");
  const [endTime, endSetTime] = useState("");

  const isButtonDisabled = !startTime || !endTime || !questions;

  const prePageHandler = () => {
    setSequence("4");
  };
  const submitHandler = () => {
    console.log("전송");
    // const emailData = {

    // }
    setModalSucess(true);
    // setContactTime(`${startTime}~${endTime}`);
  };

  return (
    <>
      <TopBar onPrev={prePageHandler}>
        <Left>
          <img src="/lee/008.png" alt="아이콘" style={{ width: "5rem" }} />
          <span>초기 비용 선택</span>
        </Left>
        <img src="/lee/010.png" alt="아이콘" style={{ width: "5rem" }} />
      </TopBar>
      <DetailContainer>
        <Title>
          <h2>
            <img src="/lee/009.png" alt="아이콘" style={{ width: "3.5rem" }} />
            상세 내용
          </h2>
          <span>상담 가능 시간과 궁금하신 점을 알려주세요</span>
        </Title>
        <InfoBox>
          <DateBox>
            <p>연락 가능 시간</p>
            <div>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              ~
              <input
                type="time"
                value={endTime}
                onChange={(e) => endSetTime(e.target.value)}
              />
              사이
            </div>
          </DateBox>
          <AskBox>
            <p>궁금한 점</p>
            <textarea
              name="questions"
              id="questions"
              cols="30"
              rows="10"
              value={questions}
              onChange={(e) => setQuestions(e.target.value)}
              placeholder="리앤김에 궁금하신 점을 작성해주세요"
            ></textarea>
          </AskBox>
        </InfoBox>
        <Btn
          disabled={isButtonDisabled}
          style={{ background: isButtonDisabled ? "#99a2ac" : mainColor }}
          onClick={submitHandler}
        >
          견적 신청
        </Btn>
      </DetailContainer>
    </>
  );
};

export default DetailInfo;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0rem 2rem;
  animation: page_slide-down 0.5s ease-out forwards;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin: 1rem 0;
`;
const DateBox = styled.div`
  p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  div {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    gap: 1rem;
    input {
      border: none;
      background-color: #f8f8f8;
      padding: 1rem 2rem;
      font-size: 1.3rem;
      border-radius: 10px;
    }
  }
`;
const AskBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20rem;
  p {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  textarea {
    width: 100%;
    height: 100%;
    background-color: #f8f8f8;
    padding: 1.5rem;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    font-size: 1.3rem;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.6rem;
  }
`;
