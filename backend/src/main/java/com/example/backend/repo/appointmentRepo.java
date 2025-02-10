package com.example.backend.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.models.appointmentModel;

@Repository
public interface appointmentRepo extends JpaRepository<appointmentModel, Long> {
    List<appointmentModel> findByUserId(Long userId);
} 
