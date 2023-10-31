import React, { useContext } from "react";
import styled from "@emotion/styled";
import { InfoBox, InputBox, Title } from "./UserInfo";
import { MailInfoContext } from "../store";
import { Btn } from "./Identities";

const BrandSelect = ({ mainColor }) => {
  const { brand, setBrand, modelName, setModelName } =
    useContext(MailInfoContext);

  const isButtonDisabled = !brand || !modelName;

  return (
    <>
      <TopBar />
      <BrandContainer>
        <Title>
          <h2>
            <img src="/lee/007.png" alt="아이콘" style={{ width: "4rem" }} />
            차량 선택
          </h2>
          <span>원하시는 차량 브랜드와 모델을 알려주세요</span>
        </Title>
        <InfoBox>
          <InputBox>
            <span>브랜드</span>
            <select
              name="brand"
              id="brand"
              placeholder="차량 브랜드를 선택해주세요"
              defaultValue={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="" disabled>
                차량 브랜드를 선택 해주세요
              </option>
              <option value="밴츠">밴츠</option>
              <option value="BMW">BMW</option>
            </select>
          </InputBox>
          <InputBox>
            <span>모델명</span>
            <input
              type="text"
              name="model"
              id="model"
              placeholder="상세 모델명을 알려 주세요"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
            />
          </InputBox>
        </InfoBox>
        <Btn style={{ background: isButtonDisabled ? "#99a2ac" : mainColor }}>
          다음
        </Btn>
      </BrandContainer>
    </>
  );
};

export default BrandSelect;

const BrandContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 4rem 2rem;
`;

const TopBar = () => {
  return (
    <TopContainer>
      <Left>
        <img src="/lee/006.png" alt="아이콘" style={{ width: "4rem" }} />
        <span>이름</span>
        <span>/</span>
        <span>연락처 선택</span>
      </Left>
      <img src="/lee/010.png" alt="아이콘" style={{ width: "5rem" }} />
    </TopContainer>
  );
};

const TopContainer = styled.div`
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(236, 245, 255, 1);
  margin: 9rem 2rem 2rem 2rem;
  border-radius: 1rem;
  cursor: pointer;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  span {
    font-size: 1.6rem;
    font-weight: 900;
  }
`;
