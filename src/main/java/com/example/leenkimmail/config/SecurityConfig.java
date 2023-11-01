package com.example.leenkimmail.config;

import com.example.leenkimmail.jwt.TokenProvider;
import com.example.leenkimmail.security.JwtAccessDeniedHandler;
import com.example.leenkimmail.security.JwtAuthenticationEntryPoint;
import com.example.leenkimmail.security.JwtSecurityConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity // 기본적인 web 보안을 활성화 하겠다.
public class SecurityConfig {
  private final TokenProvider tokenProvider;
  private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
  private final JwtAccessDeniedHandler jwtAccessDeniedHandler;
  @Bean
  public PasswordEncoder passwordEncoder() {
    return new BCryptPasswordEncoder();
  }


  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws  Exception {
    http
//          .httpBasic().disable()
          .csrf().disable()
          .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
          .and()

          .exceptionHandling()
          .authenticationEntryPoint(jwtAuthenticationEntryPoint)
          .accessDeniedHandler(jwtAccessDeniedHandler)
          .and()


          .headers()
          .frameOptions()
          .sameOrigin()
          .and()

          .authorizeRequests() // 인증을 설정하겠다는 뜻이고
          .antMatchers("/auth/**").permitAll() // 이 경로는 다 허용하고
          .antMatchers("/qna/**").hasRole("ADMIN")
          .anyRequest().authenticated()// 그외 나머지는 인증을 해야한다
          .and()
          .apply(new JwtSecurityConfig(tokenProvider));


    return http.build();
  }
}
