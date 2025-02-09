package com.example.backend.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class appointmentDto {
    private int id;

    private String fullName;
    private String email;
    private String phoneNumber;
    private String message;
    private LocalDate selectedDate;
    private LocalTime selectedTime;
    private boolean isNotificationChecked;
    
}
