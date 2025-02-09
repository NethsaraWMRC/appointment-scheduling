package com.example.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.models.appointmentModel;

public interface appointmentRepo extends JpaRepository<appointmentModel, Long> {
    
} 
