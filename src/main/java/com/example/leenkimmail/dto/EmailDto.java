package com.example.leenkimmail.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmailDto {
  private Long id;
  private String identity;       // 신분(개인,사업자,법인)
  private String clientName;     // 이름
  private String phoneNumber;    // 상담요청 핸드폰번호
  private String brand;          // 브랜드
  private String modelName;      // 모델명
  private String leaseMonths;    // 리스 개월 수
  private String deliveryDate;   // 출고 시기
  private String deposit;        // 보증금
  private String initialCost;    // 선수금
  private String contactTime;    // 연락가능시간
  private String questions;      // 건의사항
  private LocalDateTime regDate; // 상담신청 일자

}
