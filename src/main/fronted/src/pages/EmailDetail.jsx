import styled from "@emotion/styled";
import React from "react";
import { formatDate } from "../util";
import { useNavigate, useParams } from "react-router-dom";
import { fetchEamil } from "../api";
import Spiner from "../components/UI/Spiner";
import { useQuery } from "@tanstack/react-query";

// const data = {
//   identity: "개인",
//   clientName: "이철호",
//   phoneNumber: "010231231231",
//   brand: "밴츠",
//   modelName: "s 클래스",
//   leaseMonths: "64",
//   deliveryDate: "즉시출고",
//   deposit: "0",
//   initialCost: "0",
//   contactTime: "15",
//   questions: "안녕하세요",
//   regDate: "2023-11-05T00:07:40.025557",
// };

const EmailDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["email", id],
    queryFn: async ({ signal }) => await fetchEamil({ id, signal }),
    staleTime: 10000,
  });
  let content;
  if (data) {
    const formattedRegDate = formatDate(data.regDate);
    content = (
      <>
        <div>
          <Title>신분: </Title>
          <span>{data.identity}</span>
        </div>
        <div>
          <Title>이름: </Title>
          <span>{data.clientName}</span>
        </div>
        <div>
          <Title>브랜드: </Title>
          <span>{data.brand}</span>
        </div>
        <div>
          <Title>모델명: </Title>
          <span>{data.modelName}</span>
        </div>
        <div>
          <Title>출고 시기: </Title>
          <span>{data.deliveryDate}</span>
        </div>
        <div>
          <Title>리스 개월 수: </Title>
          <span>{data.leaseMonths}</span>
        </div>
        <div>
          <Title>보증금: </Title>
          <span>{data.deposit + "만원"}</span>
        </div>
        <div>
          <Title>선수금: </Title>
          <span>{data.initialCost + "만원"}</span>
        </div>
        <div>
          <Title>전화번호: </Title>
          <span>{data.phoneNumber}</span>
        </div>
        <div>
          <Title>연락가능시간: </Title>
          <span>{data.contactTime + "시"}</span>
        </div>
        <div>
          <Title>문의 날짜: </Title>
          <span>{formattedRegDate}</span>
        </div>
        <div>
          <Title>질문사항: </Title>
          <span>{data.questions}</span>
        </div>
      </>
    );
  }
  if (error) {
    console.log(error);
  }

  const nav = useNavigate();
  return (
    <>
      <DetailContainer>
        <h2>문의 내역서</h2>
        {content}
        {isLoading && <Spiner />}
      </DetailContainer>
      <BackBtn onClick={() => nav("/adm/email")}>뒤로 가기</BackBtn>
    </>
  );
};

export default EmailDetail;

const DetailContainer = styled.div`
  width: 600px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 2rem 0;
  border: 1px solid #000;
  border-radius: 10px;
  height: auto;
  h2 {
    font-size: 2rem;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 4rem;
    box-sizing: border-box;
    flex-wrap: wrap;
  }
  div:last-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    span {
      height: auto;
      overflow-wrap: break-word;
      text-align: center;
    }
  }
  span {
    font-size: 1.5rem;
    flex: 7;
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: 1.7rem;
  font-weight: 900;
  flex: 4;
`;

const BackBtn = styled.button`
  position: absolute;
  left: 5rem;
  top: 7rem;
  width: 10rem;
  height: 5rem;
  font-size: 1.5rem;
  border-radius: 10px;
  border: none;
  color: #fff;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.main};
  &:hover {
    color: #000;
  }
`;
