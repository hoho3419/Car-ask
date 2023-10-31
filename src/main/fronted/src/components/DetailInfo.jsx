import React from "react";
import styled from "@emotion/styled";
import { Title } from "./UserInfo";

const DetailInfo = ({ mainColor }) => {
  return (
    <>
      <TopBar />
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
              <input type="time" />
              ~
              <input type="time" />
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
              placeholder="리앤김에 궁금하신 점을 작성해주세요"
            ></textarea>
          </AskBox>
        </InfoBox>
      </DetailContainer>
    </>
  );
};

export default DetailInfo;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 4rem 2rem;
`;
const InfoBox = styled.div``;
const DateBox = styled.div``;
const AskBox = styled.div``;
const TopBar = () => {
  return (
    <TopContainer>
      <Left>
        <img src="/lee/008.png" alt="아이콘" style={{ width: "5rem" }} />
        <span>초기 비용 선택</span>
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
  span {
    font-size: 1.6rem;
    font-weight: 900;
  }
`;
