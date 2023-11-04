import { css } from "@emotion/css";
import React from "react";

const Spiner = () => {
  return (
    <div className={center}>
      <img src="/Spinner.gif" alt="로딩 스피너" />
    </div>
  );
};

export default Spiner;

const center = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
