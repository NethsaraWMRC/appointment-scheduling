package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.appointmentDto;
import com.example.backend.services.appointmentServices;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;






@RestController
@RequestMapping(value = "/api/v1/appointment")
@CrossOrigin(origins = "http://localhost:3000")
public class appointments {

    @Autowired
    private appointmentServices appointmentServices;

    @PostMapping("/create-appointment")
    public ResponseEntity<appointmentDto> createAppointment(@RequestBody appointmentDto appointmentDto) {
        
        return ResponseEntity.ok(appointmentServices.createAppointment(appointmentDto));
    }
    
    @GetMapping("/get-user-appointments")
    public ResponseEntity<List<appointmentDto>> getUserAppointments(@RequestParam Long userId) {

        return ResponseEntity.ok(appointmentServices.getAppointmentListByUser(userId));
    }

    @PutMapping("/{id}/cancel")
    public ResponseEntity<appointmentDto> cancelAppointment(@PathVariable Long id) {
        
        return ResponseEntity.ok(appointmentServices.cancelAppointment(id));
    }
    
    
}
