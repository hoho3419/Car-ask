import styled from "@emotion/styled";
import React from "react";

const BottomBar = ({ children, onNext }) => {
  return <BtmBar onClick={onNext}>{children}</BtmBar>;
};

export default BottomBar;

const BtmBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  height: 6.5rem;
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
  }
  animation: page_slide-down 0.5s ease-out forwards;
  cursor: pointer;
`;
