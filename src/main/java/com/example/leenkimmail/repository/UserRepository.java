package com.example.leenkimmail.repository;

import com.example.leenkimmail.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

  boolean existsByEmail(String email);
}
