export const formatDate = (date) => {
  const dateTime = new Date(date);

  // 년, 월, 일, 시간, 분을 추출
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1을 해줍니다.
  const day = dateTime.getDate();
  const hours = dateTime.getHours();
  const minutes = dateTime.getMinutes();

  // 오후/오전 구분
  const period = hours >= 12 ? "오후" : "오전";

  // 시간을 12시간 형식으로 변환
  const formattedHours = hours % 12 || 12;

  // 최종 포맷팅된 문자열 생성
  const formattedDateTime = `${year}년 ${month}월 ${day}일 ${period} ${formattedHours}시 ${minutes}분`;
  return formattedDateTime;
};
