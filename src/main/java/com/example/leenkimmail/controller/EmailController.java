package com.example.leenkimmail.controller;


import com.example.leenkimmail.dto.EmailDto;
import com.example.leenkimmail.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/email")
@RequiredArgsConstructor
public class EmailController {

  @Autowired
  private final EmailService emailService;

  @GetMapping("read-all")
  public ResponseEntity<List<EmailDto>> getAllEmail(@RequestBody EmailDto emailDto){
    List<EmailDto> emails = emailService.getAllEmail();
    return new ResponseEntity<>(emails, HttpStatus.OK);
  }

}
