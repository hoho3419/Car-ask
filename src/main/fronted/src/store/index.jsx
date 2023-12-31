import { useState, createContext } from "react";
export const MailInfoContext = createContext(null);

const Mail = ({ children }) => {
  const [sequence, setSequence] = useState("1");
  const [identity, setIdentity] = useState(""); // 신분 (개인,사업자,법인)
  const [name, setName] = useState(""); // 이름
  const [phoneNumber, setPhoneNumber] = useState(""); // 번호
  const [brand, setBrand] = useState(""); // 브랜드
  const [modelName, setModelName] = useState(""); // 모델명
  const [leaseMonths, setLeaseMonths] = useState(""); // 리스 개월 수
  const [deliverDate, setDeliverDate] = useState(""); // 출고 시기
  const [deposit, setDeposit] = useState(""); // 보증금
  const [initialCost, setInitialCost] = useState(""); // 선수금
  const [contactTime, setContactTime] = useState(""); // 연락가능시간
  const [questions, setQuestions] = useState(""); // 건의사항
  const [modalSucess, setModalSucess] = useState(false); // 전송여부

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
        leaseMonths,
        setLeaseMonths,
        deliverDate,
        setDeliverDate,
        deposit,
        setDeposit,
        initialCost,
        setInitialCost,
        contactTime,
        setContactTime,
        questions,
        setQuestions,
        modalSucess,
        setModalSucess,
      }}
    >
      {children}
    </MailInfoContext.Provider>
  );
};

export default Mail;
