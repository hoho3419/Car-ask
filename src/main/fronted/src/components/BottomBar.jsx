import styled from "@emotion/styled";
import React from "react";

const BottomBar = () => {
  return (
    <BtmBar>
      <img src="/lee/005.png" alt="아이콘" style={{ width: "5rem" }} />
      <span>이름</span>
      <span>/</span>
      <span>연락처</span>
    </BtmBar>
  );
};

export default BottomBar;

const BtmBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  height: 8rem;
  background: linear-gradient(
    to bottom,
    rgba(236, 245, 254, 1),
    rgba(236, 245, 254, 0)
  );
  margin: 0 2rem;
  padding-left: 1rem;
  box-sizing: border-box;
  border-radius: 1rem;

  span {
    font-size: 1.5rem;
    font-weight: 800;
  }
`;
