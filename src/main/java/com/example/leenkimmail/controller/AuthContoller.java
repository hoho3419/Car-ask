package com.example.leenkimmail.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthContoller {

  @GetMapping("/signup")
  public ResponseEntity<String> signup() {
    return ResponseEntity.ok("Hello");
  }
}
