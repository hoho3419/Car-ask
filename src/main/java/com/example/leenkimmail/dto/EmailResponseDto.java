package com.example.leenkimmail.dto;

import lombok.*;

import java.time.LocalDateTime;
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmailResponseDto {

  private Long id;
  private String clientName;     // 이름
  private String identity;       // 신분(개인,사업자,법인)
  private String brand;          // 브랜드
  private String contactTime;    // 연락가능시간
  private LocalDateTime regDate; // 상담신청 일자
}
