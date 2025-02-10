package com.example.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.models.appointmentModel;

@Repository
public interface appointmentRepo extends JpaRepository<appointmentModel, Long> {
    
} 
