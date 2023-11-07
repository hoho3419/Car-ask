package com.example.leenkimmail.controller;


import com.example.leenkimmail.dto.EmailDto;
import com.example.leenkimmail.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:5173/")
public class EmailController {

  @Autowired
  private EmailService emailService;

  @PostMapping("/email")
  @ResponseBody
  public Object emailResponse(@RequestBody EmailDto emailDto) throws Exception{

    System.out.println(emailDto);
    boolean isTrue = emailService.sendSimpleMessage(emailDto);
    return new ResponseEntity<>(isTrue,HttpStatus.OK);
  }
}
