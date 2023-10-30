package com.example.leenkimmail.controller;

import com.example.leenkimmail.dto.TokenDto;
import com.example.leenkimmail.dto.UserRequestDto;
import com.example.leenkimmail.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthContoller {

  @Autowired
  private final AuthService authService;
  @PostMapping("/signup")
  public ResponseEntity<String> signup(@RequestBody UserRequestDto userRequestDto) {
    return ResponseEntity.ok(authService.signup(userRequestDto));
  }
  @PostMapping("/login")
  public ResponseEntity<TokenDto> login(@RequestBody UserRequestDto userRequestDto){
    return ResponseEntity.ok(authService.login(userRequestDto));
  }
}
