package com.example.backend.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.dto.AppointmentResponseDto;
import com.example.backend.dto.appointmentDto;
import com.example.backend.models.appointmentModel;
import com.example.backend.models.appointmentModel.Status;
import com.example.backend.models.timeSlot;
import com.example.backend.models.user;
import com.example.backend.repo.TimeSlotRepo;
import com.example.backend.repo.UserRepo;
import com.example.backend.repo.appointmentRepo;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class appointmentServices {

    @Autowired
    private appointmentRepo appointmentRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private TimeSlotRepo timeSlotRepo;


    @Autowired
    private ModelMapper modelMapper;

    public appointmentDto createAppointment(appointmentDto appointmentDto){

        Optional<user> optionalUser = userRepo.findById(appointmentDto.getUserId());
        Optional<timeSlot> optionalTimeSlot = timeSlotRepo.findById(appointmentDto.getTimeSlotId());

        if(optionalTimeSlot.isEmpty() ||  optionalUser.isEmpty()){
            throw new RuntimeException("User or Time Slot not found");
        }

        timeSlot slot = optionalTimeSlot.get();

        if (!slot.getIsAvailable()) {
            throw new RuntimeException("Time slot is already booked.");
        }

        appointmentModel appointment = new appointmentModel();

        appointment.setUser(optionalUser.get());
        appointment.setTimeSlot(slot);
        appointment.setFullname(appointmentDto.getFullname());
        appointment.setMessage(appointmentDto.getMessage());
        appointment.setPhone(appointmentDto.getPhone());
        appointment.setStatus(Status.BOOKED);
        
        appointmentModel savedAppointment = appointmentRepo.save(appointment);

        slot.setIsAvailable(false);
        timeSlotRepo.save(slot);

        return modelMapper.map(savedAppointment, appointmentDto.getClass());

    }

    public List<AppointmentResponseDto> getAppointmentListByUser(Long userId){
        List<appointmentModel> appointmentList =  appointmentRepo.findByUserId(userId);

        return appointmentList.stream().map(appointmentItem -> modelMapper.map(appointmentItem, AppointmentResponseDto.class)).collect(Collectors.toList());
    }

    public appointmentDto cancelAppointment(Long appointmentId){
        Optional<appointmentModel> optionalAppointment = appointmentRepo.findById(appointmentId);

        if (optionalAppointment.isEmpty()) {
            throw new RuntimeException("Appointment not found");
        }

       
            appointmentModel appointment =  optionalAppointment.get();
            appointment.setStatus(Status.CANCELED);
            appointmentRepo.save(appointment);

            // Update the time slot to be available again
            timeSlot slot = appointment.getTimeSlot();
            slot.setIsAvailable(true);
            timeSlotRepo.save(slot); 

            return modelMapper.map(appointment, appointmentDto.class);
        
    }

}
