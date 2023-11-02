import styled from "@emotion/styled";
import React from "react";

const TopBar = ({ onPrev, children }) => {
  return <TopContainer onClick={onPrev}>{children}</TopContainer>;
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
