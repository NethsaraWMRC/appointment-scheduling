package com.example.backend.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.dto.appointmentDto;
import com.example.backend.models.appointmentModel;
import com.example.backend.repo.appointmentRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class appointmentServices {

    @Autowired
    private appointmentRepo appointmentRepo;


    @Autowired
    private ModelMapper modelMapper;

    public List<appointmentDto> getAllAppointments(){
        List<appointmentModel> appointmentList = appointmentRepo.findAll();
        return modelMapper.map(appointmentList, new TypeToken<List<appointmentDto>>() {}.getType());
    }
    
}
