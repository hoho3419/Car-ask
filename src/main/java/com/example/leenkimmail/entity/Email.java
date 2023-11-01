package com.example.leenkimmail.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Email {

  @Id
  @Column(name = "email_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String comName;     // 업체명
  private String adminEmail;  // 업체 이메일
  private String identity;    // 신분(개인,사업자,법인)
  private String clientName;  // 이름
  private String phoneNumber; // 상담요청 핸드폰번호
  private String brand;       // 브랜드
  private String modelName;   // 모델명
  private String deposit;     // 보증금
  private String initialCost; // 선수금
  private String contactTime; // 연락가능시간
  private String questions;   // 건의사항
  private LocalDateTime regDate; // 상담신청 일자

}
