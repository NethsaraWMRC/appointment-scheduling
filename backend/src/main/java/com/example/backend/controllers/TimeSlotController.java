package com.example.backend.controllers;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.timeSlotDto;
import com.example.backend.services.TimeSlotService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping(value = "/api/v1/timeslot")
@CrossOrigin(origins = "http://localhost:3000")
public class TimeSlotController {

    @Autowired
    private TimeSlotService timeSlotService;

    @PostMapping("/create")
    public ResponseEntity<timeSlotDto> createTimeSlot(@RequestBody timeSlotDto timeSlotDto) {

        return ResponseEntity.ok(timeSlotService.createTimeSlot(timeSlotDto)) ;
    }

    @GetMapping("/get-time-slots")
    public ResponseEntity<List<timeSlotDto>> getTimeSlots(@RequestParam String date) {
        LocalDate parsedDate = LocalDate.parse(date);
        return ResponseEntity.ok(timeSlotService.getTimeSlotByDate(parsedDate));
    }
    
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteTimeSlot(@PathVariable Long id) {
        try {
            timeSlotService.deleteTimeSlot(id);
            return ResponseEntity.ok("Time slot deleted successfully.");
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }
}
