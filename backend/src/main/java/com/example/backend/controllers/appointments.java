package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.appointmentDto;
import com.example.backend.services.appointmentServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping(value = "/api/v1/appointment")
public class appointments {

    @Autowired
    private appointmentServices appointmentServices;

    @PostMapping("/create-appointment")
    public ResponseEntity<appointmentDto> createAppointment(@RequestBody appointmentDto appointmentDto) {
        
        return ResponseEntity.ok(appointmentServices.createAppointment(appointmentDto));
    }
    
    
    
}
