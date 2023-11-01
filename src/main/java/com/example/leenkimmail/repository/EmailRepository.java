package com.example.leenkimmail.repository;

import com.example.leenkimmail.entity.Email;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmailRepository extends JpaRepository<Email,Long> {
}
