package com.example.leenkimmail.controller;

import com.example.leenkimmail.dto.EmailDto;
import com.example.leenkimmail.dto.EmailResponseDto;
import com.example.leenkimmail.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class AdminController {

  @Autowired
  private final EmailService emailService;

  @GetMapping("/read-all")
  public ResponseEntity<List<EmailResponseDto>> getAllEmail(HttpServletRequest request, @AuthenticationPrincipal UserDetails userDetails){
    List<EmailResponseDto> emails = emailService.getAllEmail(request,userDetails);
    return new ResponseEntity<>(emails, HttpStatus.OK);
  }
  @PostMapping("/read-all/save")
  public ResponseEntity<List<EmailDto>> getAllEmailSend(HttpServletRequest request, @AuthenticationPrincipal UserDetails userDetails){
    List<EmailDto> emails = emailService.getAllEmailSave(request,userDetails);
    return new ResponseEntity<>(emails, HttpStatus.OK);
  }
  @PostMapping("/read/{id}")
  public ResponseEntity<EmailDto> readEmail(@PathVariable("id") Long id, HttpServletRequest request, @AuthenticationPrincipal UserDetails userDetails) {
    EmailDto email = emailService.readEmail(id,request,userDetails);
    return new ResponseEntity<>(email, HttpStatus.OK);
  }
}
