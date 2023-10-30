package com.example.leenkimmail.dto;

import com.example.leenkimmail.constant.Authority;
import com.example.leenkimmail.entity.User;
import lombok.*;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserRequestDto {
  private String email;
  private String password;

  public User toAdmin(PasswordEncoder passwordEncoder){
    return User.builder()
          .email(email)
          .password(passwordEncoder.encode(password))
          .authority(Authority.ROLE_ADMIN)
          .build();
  }
  public static UserRequestDto of(User user) {
    return UserRequestDto.builder()
          .email(user.getEmail())
          .build();
  }
  public UsernamePasswordAuthenticationToken toAuthentication() {
    return new UsernamePasswordAuthenticationToken(email,password);
  }
}
