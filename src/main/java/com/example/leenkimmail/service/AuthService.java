package com.example.leenkimmail.service;

import com.example.leenkimmail.dto.TokenDto;
import com.example.leenkimmail.dto.UserRequestDto;
import com.example.leenkimmail.entity.User;
import com.example.leenkimmail.jwt.TokenProvider;
import com.example.leenkimmail.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.core.userdetails.UserDetailsService;


import javax.servlet.http.HttpServletRequest;
import java.sql.SQLIntegrityConstraintViolationException;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@EnableWebSecurity
public class AuthService {
  @Autowired
  private AuthenticationManagerBuilder authenticationManagerBuilder;
  @Autowired
  private UserRepository userRepository;
  @Autowired
  private PasswordEncoder passwordEncoder;
  @Autowired
  private TokenProvider tokenProvider;
  @Autowired
  private UserDetailsService userDetailsService;



  @Transactional
  public String signup(UserRequestDto memberRequestDto) {
    try {
      if (userRepository.existsByEmail(memberRequestDto.getEmail())) {
        throw new RuntimeException("이미 가입되어 있는 유저입니다");
      }

      if (memberRequestDto.getEmail().equals("admin")) { // 이메일로 체크
        User member = memberRequestDto.toAdmin(passwordEncoder);
        userRepository.save(member);
        return "성공";
      } else {
        return "관리자만 회원가입 가능합니다.";
      }
    }catch (DataIntegrityViolationException e) {
      if (e.getCause() instanceof SQLIntegrityConstraintViolationException) {
        // SQLIntegrityConstraintViolationException이 발생한 경우
        // 이미 admin 계정이 있음을 의미하는 메시지를 반환합니다.
        throw new RuntimeException("이미 admin 계정이 있습니다");
      }
      // 다른 DataIntegrityViolationException의 경우 기본 오류 메시지를 반환합니다.
      throw new RuntimeException("데이터베이스 오류: " + e.getMessage());
    }
  }

  @Transactional
  public TokenDto login(UserRequestDto userRequestDto) {
    // 1. Login ID/PW 를 기반으로 AuthenticationToken 생성
    UsernamePasswordAuthenticationToken authenticationToken = userRequestDto.toAuthentication();
    // 2. 실제로 검증 (사용자 비밀번호 체크) 이 이루어지는 부분
    Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

    // 3. 인증 정보를 기반으로 JWT 토큰 생성
    TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

    return tokenDto;
  }

  @Transactional
  public TokenDto loginWithUsername(String username) {
    // 1. 사용자 아이디를 기반으로 사용자 정보를 조회합니다.
    UserDetails userDetails = userDetailsService.loadUserByUsername(username);

    // 2. 사용자 정보가 없으면 예외 처리
    if (userDetails == null) {
      throw new UsernameNotFoundException("사용자를 찾을 수 없습니다.");
    }

    // 3. 인증 정보 생성
    Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

    // 4. 토큰 발급
    TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);

    return tokenDto;
  }


  @Transactional
  public TokenDto refreshToken(String refreshToken) {
    // 1. Refresh 토큰의 유효성 검사
    if (!tokenProvider.validateToken(refreshToken)) {
      throw new RuntimeException("유효하지 않은 Refresh 토큰입니다.");
    }

    // 2. Refresh 토큰을 파싱하여 사용자 정보를 추출
    Authentication authentication = tokenProvider.getAuthentication(refreshToken);

    // 3. 새로운 Access 토큰 생성
    TokenDto newAccessToken = tokenProvider.generateTokenDto(authentication);

    return newAccessToken;
  }

  public User validateTokenAndGetUser(HttpServletRequest request, UserDetails userDetails) {
    String accessToken = request.getHeader("Authorization");
    if (accessToken == null ) {
      return null;
    }
    accessToken = accessToken.substring(7);
    if (!tokenProvider.validateToken(accessToken)) {
      throw new IllegalArgumentException("토큰이 만료됐습니다. Refresh Token을 보내주세요.");
    }
    Long Id = Long.valueOf(userDetails.getUsername());
    return userRepository.findById(Id).orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다"));
  }
  public boolean isValidEmail(String email) {
    return userRepository.existsByEmail(email);
  }
}