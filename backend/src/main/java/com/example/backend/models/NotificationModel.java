package com.example.backend.models;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "notifications")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class NotificationModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private user user;

    @ManyToOne
    @JoinColumn(name = "appointment_id", nullable = false)
    private appointmentModel appointment;

    @Column(nullable = false)
    private Boolean notify = false;

}
