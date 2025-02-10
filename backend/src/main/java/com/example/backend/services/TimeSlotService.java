package com.example.backend.services;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.dto.timeSlotDto;
import com.example.backend.models.timeSlot;
import com.example.backend.repo.TimeSlotRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class TimeSlotService {

    @Autowired
    private TimeSlotRepo timeSlotRepo;

    @Autowired
    private ModelMapper modelMapper;

    public timeSlotDto createTimeSlot(timeSlotDto timeSlotDto){
        timeSlot slot = modelMapper.map(timeSlotDto, timeSlot.class);

        timeSlot savedSlot = timeSlotRepo.save(slot);

        return modelMapper.map(savedSlot, timeSlotDto.class);
    }

    public List<timeSlotDto> getTimeSlotByDate(LocalDate date){
        List<timeSlot> timeSlots = timeSlotRepo.findByDate(date);

        return timeSlots.stream()
                        .map(timeSlot -> modelMapper.map(timeSlot, timeSlotDto.class))
                        .collect(Collectors.toList());
    }

    public void deleteTimeSlot(Long id){
        if(timeSlotRepo.existsById(id)){
            timeSlotRepo.deleteById(id);
        }else {
            throw new RuntimeException("Time slot not found with id: " + id);
        }
        

       
    }
    
}
