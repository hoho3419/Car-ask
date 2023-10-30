import { useState, createContext } from "react";
export const MailInfo = createContext(null);

const Mail = ({ children }) => {
  const [identity, setIdentity] = useState(""); // 신분 (개인,사업자,법인)
  const [name, setName] = useState(""); // 이름
  const [phoneNumber, setPhoneNumber] = useState(""); // 번호
  const [brand, setBrand] = useState(""); // 브랜드
  const [modelName, setModelName] = useState(""); // 모델명
  const [initialCost, setInitialCost] = useState(0); // 초기비용
  const [advancePayment, setAdvancePayment] = useState(0); // 선납금
  const [contactTime, setContactTime] = useState(""); // 연락가능시간
  const [questions, setQuestions] = useState("");

  return (
    <MailInfo.Provider
      value={{
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
        initialCost,
        setInitialCost,
        advancePayment,
        setAdvancePayment,
        contactTime,
        setContactTime,
        questions,
        setQuestions,
      }}
    >
      {children}
    </MailInfo.Provider>
  );
};

export default Mail;
