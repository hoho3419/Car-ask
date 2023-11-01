import styled from "@emotion/styled";
import React from "react";

const TopBar = ({ onPrev }) => {
  return (
    <TopContainer onClick={onPrev}>
      <Left>
        <img src="/lee/011.png" alt="아이콘" style={{ width: "5rem" }} />
        <span>구분 선택</span>
      </Left>
      <img src="/lee/010.png" alt="아이콘" style={{ width: "5rem" }} />
    </TopContainer>
  );
};

export default TopBar;

const TopContainer = styled.div`
  height: 6.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(236, 245, 255, 1);
  margin: 9rem 2rem 0rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 1.6rem;
  }
`;
