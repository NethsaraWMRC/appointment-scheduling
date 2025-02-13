package com.example.backend.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.models.user;

@Repository
public interface UserRepo extends JpaRepository<user, Long>{
    Optional<user> findByEmail(String email);
    
}
