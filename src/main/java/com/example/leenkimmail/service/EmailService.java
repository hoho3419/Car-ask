package com.example.leenkimmail.service;

import com.example.leenkimmail.dto.EmailDto;
import com.example.leenkimmail.entity.Email;
import com.example.leenkimmail.repository.EmailRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EmailService {

  @Autowired
  private EmailRepository emailRepository;

  public List<EmailDto> getAllEmail() {
    List<EmailDto> emailDtos = new ArrayList<>();
    List<Email> emails = emailRepository.findAll();

    for(Email email : emails){
      EmailDto emailDto = new EmailDto();

      emailDto.setId(email.getId());
      emailDto.setComName(email.getComName());
      emailDto.setAdminEmail(email.getAdminEmail());
      emailDto.setIdentity(email.getIdentity());
      emailDto.setClientName(email.getClientName());
      emailDto.setPhoneNumber(email.getPhoneNumber());
      emailDto.setBrand(email.getBrand());
      emailDto.setModelName(email.getModelName());
      emailDto.setDeposit(email.getDeposit());
      emailDto.setInitialCost(email.getInitialCost());
      emailDto.setContactTime(email.getContactTime());
      emailDto.setQuestions(email.getQuestions());
      emailDto.setRegDate(email.getRegDate());

      emailDtos.add(emailDto);
    }
    return emailDtos;
  }

}
