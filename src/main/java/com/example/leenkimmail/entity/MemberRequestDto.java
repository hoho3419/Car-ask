package com.example.leenkimmail.entity;

import com.example.leenkimmail.constant.Authority;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberRequestDto {
  private String email;
  private String password;

  public Member toMember(PasswordEncoder passwordEncoder) {
    return Member.builder()
          .email(email)
          .password(passwordEncoder.encode(password))
          .authority(Authority.ROLE_USER)
          .build();
  }
  public Member toAdmin(PasswordEncoder passwordEncoder){
    return Member.builder()
          .email(email)
          .password(passwordEncoder.encode(password))
          .authority(Authority.ROLE_ADMIN)
          .build();
  }
  public UsernamePasswordAuthenticationToken toAuthentication() {
    return new UsernamePasswordAuthenticationToken(email, password);
  }
}