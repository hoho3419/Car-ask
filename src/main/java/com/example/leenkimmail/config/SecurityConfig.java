package com.example.leenkimmail.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@EnableWebSecurity // 기본적인 web 보안을 활성화 하겠다.
public class SecurityConfig {

  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws  Exception {
    http
//          .httpBasic().disable()
//          .csrf().disable()
//          .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//          .and()
//
//          .headers()
//          .frameOptions()
//          .sameOrigin()
//          .and()

          .authorizeRequests() // 인증을 설정하겠다는 뜻이고
          .antMatchers("/auth/signup").permitAll() // 이 경로는 다 허용하고
          .anyRequest().authenticated(); // 그외 나머지는 인증을 해야한다

    return http.build();
  }
}
