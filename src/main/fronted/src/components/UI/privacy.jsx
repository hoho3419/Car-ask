import { css } from "@emotion/css";
import React from "react";

const body = css`
  padding: 4vw;
  font-family: ONE_Mobile_Regular;
  font-size: 1.5rem;
  word-wrap: break-word;
  h1 {
    margin: 2vw 0;
  }
  h2 {
    margin: 1.6vw 0;
  }
  h3 {
    margin: 1.2vw 0;
  }
  p {
    margin: 1vw 0 3vw 0;
  }
  li {
    margin: 0.5rem 0;
  }
`;

const Privacy = () => {
  return (
    <div className={body}>
      <h1> 개인정보 처리방침</h1>
      <p>
        상담 접수 리앤김 웹사이트(이하, "웹사이트"), 신차문의(이하, "채팅")를
        통해 상담 서비스(이하, "서비스")를 제공합니다. 본 서비스는 상담
        접수자(이하, "이용자")를 위해 주식회사 리앤김(이하, "회사")이
        운영합니다. 본 개인정보 처리방침은 본 사이트 방문객과 서비스
        이용자로부터 수집한 정보와 관련하여 회사의 정책을 안내해드립니다. 회사는
        정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 ‘정보통신망법’)
        제27조의 2에 의거 이용자의 개인정보보호와 권익을 보호하고 관련된 고충 및
        애로사항을 신속하게 처리하기 위해 아래의 개인정보처리방침을
        제정·운영하고 있습니다. 회사는 관계 법령에서 규정하고 있는 책임과 의무를
        준수하고 실천하기 위해 최선의 노력을 하고 있습니다.
      </p>
      <h2>1. 개인정보 수집</h2>
      <h3>서비스 제공을 위한 필요 최소한의 개인정보를 수집하고 있습니다.</h3>
      <p>
        회사는 서비스 제공을 위하여 필요한 최소한의 개인정보를 수집하고
        있습니다. 회사는 서비스에 따라 수집목적, 항목, 보유 및 이용 기간, 수집
        방법을 달리하며 내용은 아래와 같습니다.
      </p>
      <h3>[차량 상담 이용 시]</h3>
      <p>
        <strong>필수</strong>
        이름, 성별, 연락처.
      </p>
      <p>
        <strong>서비스 선택</strong>결제 기록
      </p>
      <h2>개인정보를 수집하는 방법은 다음과 같습니다.</h2>
      <p>
        개인정보를 수집하는 경우에는 반드시 사전에 이용자에게 해당 사실을 알리고
        동의를 구하고 있으며, 아래와 같은 방법을 통해 개인정보를 수집합니다.
      </p>
      <ul>
        <li>
          회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의를
          하고 직접 정보를 입력하는 경우
        </li>
        <li>제휴 서비스 또는 단체 등으로부터 개인정보를 제공받은 경우</li>
        <li>고객센터를 통한 상담 과정에서 웹페이지, 메일, 팩스, 전화 등</li>
        <li>온·오프라인에서 진행되는 이벤트/행사 등 참여</li>
        <li>
          서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.
        </li>
        <li>
          PC웹, 모바일 웹/앱 이용 과정에서 단말기정보(OS, 화면크기, 단말기
          고유번호, 단말기 기종, 단말기 모델명), IP주소, 쿠키, 방문일시,
          부정이용기록, 서비스 이용 기록 등의 정보가 자동으로 생성되어 수집될 수
          있습니다.
        </li>
      </ul>
      <h2>2. 개인정보 이용</h2>
      <p>
        회원관리, 서비스 제공·개선, 신규 서비스 개발 등을 위해 이용합니다. 회원
        가입 시 또는 서비스 이용 과정에서 홈페이지 또는 채팅 등을 통해 아래와
        같이 서비스 제공을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.
      </p>
      <ul>
        <li>회원 식별/가입의사 확인, 본인/연령 확인, 부정이용 방지</li>
        <li>서비스 기능 제공</li>
        <li>
          채팅 상담, 문의사항 또는 불만처리, 정보전달 제공 / 다만 법정 공휴일 및
          주말에는 제공하지 않습니다.
        </li>
        <li>신규 서비스 개발, 다양한 서비스 제공</li>
        <li>
          서비스의 원활한 운영에 지장을 주는 행위(계정 도용 및 부정 이용 행위 등
          포함)에 대한 방지 및 제재
        </li>
        <li>
          서비스 이용 기록, 접속 빈도 및 서비스 이용에 대한 통계, 프라이버시
          보호 측면의 서비스 환경 구축, 서비스 개선에 활용
        </li>
        <li>서비스 내 행사의 경품으로 재화 또는 서비스 제공</li>
        <li>사고발생 시 원인 규명 및 처리</li>
      </ul>
      <h2>3. 개인정보 제공</h2>
      <p>
        회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만,
        아래의 경우에는 예외로 합니다.
      </p>
      <ul>
        <li>이용자들이 사전에 동의한 경우</li>
        <li>
          법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에
          따라 수사기관의 요구가 있는 경우
        </li>
      </ul>
      <h2>4. 개인정보 파기</h2>
      <p>
        회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를
        지체 없이 파기합니다. 회사의 개인정보 파기절차 및 방법은 다음과
        같습니다.
      </p>
      <p>개인정보 파기 절차는 아래와 같습니다.</p>
      <ul>
        <li>
          회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의
          DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에
          의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후
          파기되어집니다.
        </li>
        <li>
          관련 법령에 의해 별도 DB로 옮겨진 개인정보는 법률에 의한 경우가
          아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
        </li>
      </ul>
      <p>개인정보 파기 방법은 아래와 같습니다.</p>
      <ul>
        <li>
          전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
          방법을 사용하여 삭제합니다.
        </li>
        <li>
          종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다.
        </li>
        <li>회원 탈퇴 시, 개인정보를 파기합니다.</li>
        <li>
          이용자가 회원을 탈퇴할 경우 회사는 지체 없이 보유하고 있는 개인정보를
          삭제합니다.
        </li>
        <li>
          1년간 서비스를 이용하지 않을 경우 회사는 개인정보를 별도로 분리하여
          보관합니다.
        </li>
        <li>
          법령에 따라 일정기간 보관해야 하는 개인정보 및 해당 법령은 아래 표와
          같습니다.
        </li>
      </ul>
      계약 또는 청약철회 등에 관한 기록 보존이유 :
      전자상거래등에서의소비자보호에관한법률 보존기간 : 5년 대금 결제 및 재화
      등의 공급에 관한 기록 보존이유 : 전자상거래등에서의소비자보호에관한법률
      보존기간 : 5년 소비자 불만 또는 분쟁처리에 관한 기록 보존이유 :
      전자상거래등에서의소비자보호에관한법률 보존기간 : 3년 로그 기록 보존이유 :
      통신비밀보호법 보존기간 : 3개월
      <h2>5. 이용자의 권리와 그 행사방법</h2>
      <p>
        회사는 서비스 이용과정에서 이용자로부터 다음과 같은 정보들을 자동으로
        생성/수집하고 다음의 목적으로 이용할 수 있습니다.
      </p>
      <p>개인정보 수집 거부 방법</p>
      <ul>
        <li>
          이용자들의 개인정보 조회,수정을 위해서는 "개인정보변경"(또는
          "회원정보수정" 등)을 가입해지(동의철회)를 위해서는 "회원탈퇴"를
          클릭하여 본인 확인 절차를 거치신 후 열람, 정정 또는 탈퇴가 가능합니다.
        </li>
        <li>
          혹은 개인정보보호책임자에게 서면, 전화 또는 이메일로 연락하시면
          지체없이 조치하겠습니다.
        </li>
        <li>
          귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기
          전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된
          개인정보를 제 3자에게 이미 제공한 경우에는 정정 처리결과를 제 3자에게
          지체없이 통지하여 정정이 이루어지도록 하겠습니다.
        </li>
        <li>
          회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보는 "회사가
          수집하는 개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그
          외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
        </li>
        <li>
          만 14세 미만 아동의 경우 법정 대리인이 아동의 개인정보를 조회하거나
          수정할 권리, 수집 및 이용 동의를 철회할 권리를 가집니다.
        </li>
      </ul>
      <h2>6. 개인정보 자동 수집 장치의 설치와 운영 거부</h2>
      <p>
        회사는 귀하의 정보를 수시로 저장하고 찾아내는 "쿠키(cookie)" 등을
        운용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 귀하의
        브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에
        저장됩니다.
      </p>
      <h3>수집항목</h3>
      <p>
        방문기록, 접속IP정보, 서비스 이용기록. 광고 식별자, 쿠키(쿠키는
        웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에게
        보내는 소량의 정보이며 이용자 PC 컴퓨터의 하드디스크에 저장되기도
        합니다.)
      </p>
      <p>회사은(는) 다음과 같은 목적을 위해 쿠키를 사용합니다.</p>
      <h3>쿠키 등 사용 목적</h3>
      <ul>
        <li>
          회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과
          관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악
          등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공
        </li>
        <li>
          귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는
          웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가
          저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도
          있습니다.
        </li>
      </ul>
      <h3>쿠키 설정 거부 방법</h3>
      <ul>
        <li>
          쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의
          옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을
          거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.
        </li>
        <li>
          설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 &gt;
          인터넷 옵션 &gt; 개인정보
        </li>
        <li>
          단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을
          수 있습니다.
        </li>
      </ul>
      <h2>7. 개인정보에 관한 민원서비스</h2>
      <p>
        회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기
        위하여 아래와 같이 관련 부서 및 개인정보보호책임자를 지정하고 있습니다.
      </p>
      <h3>개인정보보호담당자</h3>
      <ul>
        <li>성명 : 김희수</li>
        <li>소속 : 마케팅</li>
        <li>전화번호 : 010-5890-3574</li>
        <li>이메일 :leenkim_lease@naver.com</li>
      </ul>
      <h3>개인정보보호책임자</h3>
      <ul>
        <li>성명 : 김희수</li>
        <li>소속 : 마케팅</li>
        <li>전화번호 : 010-5890-3574</li>
        <li>이메일 :leenkim_lease@naver.com</li>
      </ul>
      <h2>8. 기타</h2>
      <ul>
        <li>
          귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련
          민원을 개인정보보호책임자 혹은 담당부서로 신고하실 수 있습니다.
        </li>
        <li>
          회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴
          것입니다.
        </li>
      </ul>
      <p>
        기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에
        문의하시기 바랍니다.
      </p>
      <ul>
        <li>개인정보침해신고센터 (privacy.kisa.or.kr / 국번 없이 118)</li>
        <li>대검찰청 사이버범죄수사단 (www.spo.go.kr / 02-3480-2000)</li>
        <li>경찰청 사이버안전국 (www.ctrc.go.kr/ 국번 없이 182)</li>
      </ul>
    </div>
  );
};

export default Privacy;
