package com.example.leenkimmail.controller;

import com.example.leenkimmail.dto.TokenDto;
import com.example.leenkimmail.entity.MemberRequestDto;
import com.example.leenkimmail.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class AuthController {

  @Autowired
  private final AuthService authService;
  @PostMapping("/signup")
  public ResponseEntity<String> signup(@RequestBody MemberRequestDto memberRequestDto) {
    return ResponseEntity.ok(authService.signup(memberRequestDto));
  }
  @PostMapping("/login")
  public ResponseEntity<TokenDto> login(@RequestBody MemberRequestDto memberRequestDto){
    return ResponseEntity.ok(authService.login(memberRequestDto));
  }
}
