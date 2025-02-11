package com.example.backend.dto;

import java.time.LocalDateTime;

import com.example.backend.models.timeSlot;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentResponseDto {
    private Long id;
    private Long userId;
    private timeSlot timeSlot; 
    private String fullname;
    private String message;
    private String phone;
    private String status;
    private LocalDateTime createdAt;
}