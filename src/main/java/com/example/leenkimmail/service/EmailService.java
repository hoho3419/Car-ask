package com.example.leenkimmail.service;

import com.example.leenkimmail.dto.EmailDto;
import com.example.leenkimmail.dto.EmailResponseDto;
import com.example.leenkimmail.entity.Email;
import com.example.leenkimmail.repository.EmailRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;
import java.io.UnsupportedEncodingException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@PropertySource("classpath:application.properties")
@Slf4j
public class EmailService {

  private final JavaMailSender javaMailSender;
  @Autowired
  private EmailRepository emailRepository;
  @Value("${spring.mail.nickName}")
  private String id;

  public List<EmailResponseDto> getAllEmail() {
    List<EmailResponseDto> emailDtos = new ArrayList<>();
    List<Email> emails = emailRepository.findAll();

    for(Email email : emails){
      EmailResponseDto emailDto = new EmailResponseDto();

      emailDto.setId(email.getId());
      emailDto.setClientName(email.getClientName());
      emailDto.setBrand(email.getBrand());
      emailDto.setRegDate(email.getRegDate());

      emailDtos.add(emailDto);
    }
    return emailDtos;
  }
  public EmailDto readEmail(Long id, HttpServletRequest request, UserDetails userDetails){
    EmailDto emailDto = new EmailDto();


    Email email = emailRepository.findById(id).orElseThrow(() -> new RuntimeException("찾는 게시물이 없습니다"));
    emailDto.setId(email.getId());
    emailDto.setIdentity(email.getIdentity());
    emailDto.setClientName(emailDto.getClientName());
    emailDto.setPhoneNumber(emailDto.getPhoneNumber());
    emailDto.setBrand(email.getBrand());
    emailDto.setModelName(email.getModelName());
    emailDto.setLeaseMonths(email.getLeaseMonths());
    emailDto.setDeliveryDate(emailDto.getDeliveryDate());
    emailDto.setDeposit(email.getDeposit());
    emailDto.setInitialCost(emailDto.getInitialCost());
    emailDto.setContactTime(emailDto.getContactTime());
    emailDto.setQuestions(email.getQuestions());
    emailDto.setRegDate(email.getRegDate());

    return emailDto;
  }

  public Boolean sendSimpleMessage(EmailDto emailDto) throws Exception{

    String adminEmail1 = "hoho3419@naver.com";
    String adminEmail2 = "hoho3419@eanswer.com";

    MimeMessage admin1 = createMessage(emailDto,adminEmail1);
    MimeMessage admin2 = createMessage(emailDto,adminEmail2);

    try{
      javaMailSender.send(admin1);
      javaMailSender.send(admin2);
    }catch (MailException e){
      e.printStackTrace();
      throw new IllegalArgumentException();
    }
    Email email = new Email();
    email.setIdentity(emailDto.getIdentity());
    email.setClientName(emailDto.getClientName());
    email.setPhoneNumber(emailDto.getPhoneNumber());
    email.setBrand(emailDto.getBrand());
    email.setModelName(emailDto.getModelName());
    email.setLeaseMonths(emailDto.getLeaseMonths());
    email.setDeliveryDate(emailDto.getDeliveryDate());
    email.setDeposit(emailDto.getDeposit());
    email.setInitialCost(emailDto.getInitialCost());
    email.setContactTime(emailDto.getContactTime());
    email.setQuestions(emailDto.getQuestions());
    email.setRegDate(LocalDateTime.now());

    System.out.println(emailDto.getIdentity() +
          emailDto.getClientName() +
          emailDto.getPhoneNumber() +
          emailDto.getBrand() +
          emailDto.getModelName() +
          emailDto.getLeaseMonths() +
          emailDto.getDeliveryDate() +
          emailDto.getDeposit() +
          emailDto.getInitialCost() +
          emailDto.getContactTime() +
          emailDto.getQuestions());



    emailRepository.save(email);
    return true;
  }

  public MimeMessage createMessage(EmailDto emailDto, String adminEmail) throws MessagingException, UnsupportedEncodingException {
    log.info("보내는 대상 : " + adminEmail);

    MimeMessage message = javaMailSender.createMimeMessage();
    String identity = emailDto.getIdentity();
    String clientName = emailDto.getClientName();
    String phoneNumber = emailDto.getPhoneNumber();
    String brand = emailDto.getBrand();
    String modelName = emailDto.getModelName();
    String leaseMonths = emailDto.getLeaseMonths();
    String deliveryDate = emailDto.getDeliveryDate();
    String deposit = emailDto.getDeposit();
    String initialCost = emailDto.getInitialCost();
    String contactTime = emailDto.getContactTime();
    String questions = emailDto.getQuestions();
    LocalDateTime regDate = LocalDateTime.now(); // emailDto에서 LocalDateTime을 가져옵니다.

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH시 mm분");
    String formattedDate = regDate.format(formatter);

    message.addRecipients(MimeMessage.RecipientType.TO, adminEmail); // to 보내는 대상
    message.setSubject("[" + clientName + "]님의 상담요청"); // 메일 제목


    String msg="";
    msg += "<h3 style=\"font-size: 20px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\">[" + clientName + "] 상담요청</h3>";
    msg += "</p>";
    msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 신분 : ";
    msg += identity;
    msg += "</p>";
    msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 전화번호 : ";
    msg += phoneNumber;
    msg += "</p>";
    msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 브랜드 : ";
    msg += brand;
    msg += "</p>";
    msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 모델명 : ";
    msg += modelName;
    msg += "</p>";
    msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 리스 개월 수 : ";
    msg += leaseMonths;
    msg += "개월</p>";
    msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 출고 시기 : ";
    msg += deliveryDate;
    msg += "</p>";
    msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 보증금 : ";
    msg += deposit;
    msg += "만원</p>";
    msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 선수금 : ";
    msg += initialCost;
    msg += "만원</p>";
    msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 연락 가능 시간 : ";
    msg += contactTime;
    msg += "시</p>";
    msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 궁금 사항 : ";
    msg += questions;
    msg += "</p>";
    msg += "<p style=\"font-size: 17px; padding-right: 30px; padding-left: 30px; margin-bottom: 30px;\"> 신청 날짜 : ";
    msg += formattedDate;
    msg += "</p>";

    message.setText(msg, "utf-8", "html"); //내용, charset타입, subtype
    message.setFrom(new InternetAddress(id, adminEmail)); //보내는 사람의 메일 주소, 보내는 사람 이름

    return message;
  }
}
