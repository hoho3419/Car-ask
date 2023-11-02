import styled from "@emotion/styled";
import Mail, { MailInfoContext } from "../store";
import { css } from "@emotion/css";
import { Global, css as style } from "@emotion/react";
import DetailInfo from "../components/DetailInfo";
import { useContext, useState } from "react";
import Identities from "../components/Identities";
import UserInfo from "../components/UserInfo";
import BrandSelect from "../components/BrandSelect";
import InitialCost from "../components/InitialCost";
import Sucess from "../components/UI/Sucess";

const header = css`
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 7rem;
  margin-top: 10px;
`;

function Home() {
  const { sequence, modalSucess } = useContext(MailInfoContext);
  const mainColor = "#0c4da2";
  return (
    <>
      <Global styles={global} />
      <Container>
        <img src="/leenkim.png" alt="리앤김 로고" className={header} />
        {sequence === "1" && <Identities mainColor={mainColor} />}
        {sequence === "2" && <UserInfo mainColor={mainColor} />}
        {sequence === "3" && <BrandSelect mainColor={mainColor} />}
        {sequence === "4" && <InitialCost mainColor={mainColor} />}
        {sequence === "5" && <DetailInfo mainColor={mainColor} />}
        {modalSucess && <Sucess />}
      </Container>
    </>
  );
}

export default Home;

const global = style`
    *{
        font-family: ONE_Mobile_Bold;
    }
`;

const Container = styled.div`
  position: relative;
  display: block;
  height: auto;
  min-height: 100vh;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
  box-shadow: 0 0 20px 20px rgb(146 161 176 / 15%);
  background: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
`;
