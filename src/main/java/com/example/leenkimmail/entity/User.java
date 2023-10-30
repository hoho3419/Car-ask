package com.example.leenkimmail.entity;

import com.example.leenkimmail.constant.Authority;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "user")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {

  @Id
  @Column(name = "user_id")
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long userId;

  private String email;

  private String password;

  private boolean activated;

  @Enumerated(EnumType.STRING)
  private Authority authority;

  @Builder
  public User( String email, String password, Authority authority) {
    this.email = email;
    this.password = password;
    this.authority = authority;
  }
}
