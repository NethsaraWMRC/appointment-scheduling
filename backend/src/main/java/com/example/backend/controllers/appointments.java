package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.appointmentDto;
import com.example.backend.services.appointmentServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping(value = "/api/v1/appointment")
public class appointments {

    @Autowired
    private appointmentServices appointmentServices;

    @GetMapping("/getallappointments")
    public List<appointmentDto> getAllAppointments() {
        return appointmentServices.getAllAppointments();
    }
    
    
}
