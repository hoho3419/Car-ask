import React from "react";
import EmailItem from "./EmailItem";
import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { fetchEamils } from "../../api";
import Spiner from "../UI/Spiner";

const EmailList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["email"],
    queryFn: async ({ signal }) => await fetchEamils({ signal }),
  });

  return (
    <TableContainer>
      <thead>
        <TableHeaderCell>
          <th>이름</th>
          <th>신분</th>
          <th>브랜드</th>
          <th>연락가능 시간</th>
          <th>문의 날짜</th>
        </TableHeaderCell>
      </thead>
      {data &&
        data.map((el) => (
          <EmailItem
            key={el.id}
            id={el.id}
            name={el.clientName}
            brand={el.brand}
            regDate={el.regDate}
            identity={el.identity}
            contactTime={el.contactTime}
          />
        ))}
      {isLoading && <Spiner />}
    </TableContainer>
  );
};

export default EmailList;

const TableContainer = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 2rem;
`;

const TableHeaderCell = styled.tr`
  th {
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    font-weight: bold;
  }
`;
