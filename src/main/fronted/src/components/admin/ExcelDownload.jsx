import React from "react";
import styled from "@emotion/styled";
import { useMutation } from "@tanstack/react-query";
import { excelSave } from "../../api";
import Spiner from "../UI/Spiner";

function ExcelDownload() {
  const getData = (data) => {
    const csvData = changeFormatCsvData(data);
    download(csvData);
  };

  const {
    mutate,
    data: excelData,
    isPending,
  } = useMutation({
    mutationFn: excelSave,
    onSuccess: (res) => {
      if (res) {
        getData(res);
      }
    },
  });
  const download = (csvData) => {
    const blob = new Blob([`\ufeff${csvData}`], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.setAttribute("href", url);
    link.setAttribute("download", `리앤김_메일_문의내역`);
    link.click();
  };

  const changeFormatCsvData = (data) => {
    const row = [];
    const header = Object.keys(data[0]);
    row.push(header.join(","));
    data.map((item) => {
      const value = Object.values(item);
      row.push(value.join(","));
    });

    return row.join("\n");
  };

  const dataFetch = () => {
    mutate();
  };

  return (
    <>
      <DownloadButton onClick={dataFetch}>엑셀 다운로드</DownloadButton>
      {isPending && <Spiner />}
    </>
  );
}
export default ExcelDownload;

const DownloadButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.color.main};
  font-weight: 900;
  color: #fff;
  border: none;
  cursor: pointer;
  &:hover {
    color: #fff;
  }
`;
