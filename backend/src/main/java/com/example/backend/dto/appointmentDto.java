package com.example.backend.dto;


import java.time.LocalDateTime;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class appointmentDto {
    private Long id;
    private Long userId;
    private Long timeSlotId;
    private String fullname;
    private String message;
    private String phone;
    private String status;
    private LocalDateTime createdAt;
}