import React from "react";
import EmailItem from "./EmailItem";

const demo = [
  {
    id: 1,
    clientName: "ㅇㅁㄴ",
    brand: "BMW",
    regDate: "2023-11-04T23:59:12.37679",
  },
  {
    id: 2,
    clientName: "ㅇㅁㄴ",
    brand: "BMW",
    regDate: "2023-11-05T00:00:55.36701",
  },
  {
    id: 3,
    clientName: "ㅇㅁㄴ",
    brand: "BMW",
    regDate: "2023-11-05T00:07:40.025557",
  },
];

const EmailList = () => {
  return (
    <table>
      <tr>
        <th>이름</th>
        <th>브랜드</th>
        <th>문의 날짜</th>
      </tr>
      {demo.map((el) => (
        <EmailItem
          key={el.id}
          id={el.id}
          name={el.clientName}
          brand={el.brand}
          regDate={el.regDate}
        />
      ))}
    </table>
  );
};

export default EmailList;
