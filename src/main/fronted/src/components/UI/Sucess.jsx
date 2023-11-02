import React, { useContext } from "react";
import Modal from "./Modal";
import styled from "@emotion/styled";
import { MailInfoContext } from "../../store";

const Sucess = () => {
  const { setModalSucess } = useContext(MailInfoContext);

  const clearHandler = () => {
    setModalSucess(false);
  };

  return (
    <Modal onClose={clearHandler}>
      <SucessBox>
        <h2>
          견적 신청이 <br />
          완료되었습니다.
        </h2>
        <p>
          전문 상담 직원이 <br />
          보내주신 조건을 꼼꼼히 검토하여
          <br /> 최고의 견적으로 연락드리겠습니다.
        </p>
        <button onClick={clearHandler}>홈으로 이동</button>
      </SucessBox>
    </Modal>
  );
};

export default Sucess;

const SucessBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    margin-top: 2rem;
    font-size: 3.5rem;
    white-space: normal;
    word-wrap: break-word;
    color: #0c4da2;
    font-family: GmarketSansTTFBold;
  }
  p {
    font-size: 2rem;
    margin: 3rem 0;
    font-family: GmarketSansTTFMedium;
  }
  button {
    width: 100%;
    padding: 1.5rem;
    font-size: 2rem;
    border: none;
    border-radius: 10px;
    background-color: #0c4da2;
    color: #fff;
    font-family: GmarketSansTTFBold;
    cursor: pointer;
  }
`;
