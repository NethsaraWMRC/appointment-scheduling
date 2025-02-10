package com.example.backend.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.models.timeSlot;
import java.util.List;
import java.time.LocalDate;


@Repository
public interface TimeSlotRepo extends JpaRepository<timeSlot, Long> {
    List<timeSlot> findByDate(LocalDate date);
}
