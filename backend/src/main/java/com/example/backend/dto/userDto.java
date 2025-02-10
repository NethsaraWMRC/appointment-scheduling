package com.example.backend.dto;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class userDto {
    private Long id;
    private String email;
    private String password;
    private List<appointmentDto> appointments; 
}
