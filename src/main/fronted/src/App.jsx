import styled from "@emotion/styled";
import Mail from "./store";
import Identities from "./components/Identities";
import { css } from "@emotion/css";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import UserInfo from "./components/UserInfo";
import BrandSelect from "./components/BrandSelect";
import InitialCost from "./components/InitialCost";
import DetailInfo from "./components/DetailInfo";

const header = css`
  position: fixed;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 7rem;
  margin-top: 10px;
`;

function App() {
  const mainColor = "#0c4da2";

  return (
    <Mail>
      <Container>
        <img src="/leenkim.png" alt="리앤김 로고" className={header} />
        {/* <Identities mainColor={mainColor} /> */}
        {/* <UserInfo mainColor={mainColor} /> */}
        {/* {<BrandSelect mainColor={mainColor} />} */}
        {/* <InitialCost mainColor={mainColor} /> */}
        <DetailInfo mainColor={mainColor} />
      </Container>
    </Mail>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  display: block;
  height: auto;
  min-height: 100vh;
  max-width: 720px;
  margin: 0 auto;
  box-shadow: 0 0 20px 20px rgb(146 161 176 / 15%);
  background: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
`;
