import { useState, createContext } from "react";
export const MailInfoContext = createContext(null);

const Mail = ({ children }) => {
  const [sequence, setSequence] = useState("1");
  const [identity, setIdentity] = useState(""); // 신분 (개인,사업자,법인)
  const [name, setName] = useState(""); // 이름
  const [phoneNumber, setPhoneNumber] = useState(""); // 번호
  const [brand, setBrand] = useState(""); // 브랜드
  const [modelName, setModelName] = useState(""); // 모델명
  const [deposit, setDeposit] = useState(""); // 보증금
  const [initialCost, setInitialCost] = useState(""); // 선수금
  const [contactTime, setContactTime] = useState(""); // 연락가능시간
  const [questions, setQuestions] = useState(""); // 건의사항
  return (
    <MailInfoContext.Provider
      value={{
        sequence,
        setSequence,
        identity,
        setIdentity,
        name,
        setName,
        phoneNumber,
        setPhoneNumber,
        brand,
        setBrand,
        modelName,
        setModelName,
        deposit,
        setDeposit,
        initialCost,
        setInitialCost,
        contactTime,
        setContactTime,
        questions,
        setQuestions,
      }}
    >
      {children}
    </MailInfoContext.Provider>
  );
};

export default Mail;
