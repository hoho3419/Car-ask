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
  private String brand;          // 브랜드
  private LocalDateTime regDate; // 상담신청 일자
}
