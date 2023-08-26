package com.rang.scheduler.entities;

import com.rang.scheduler.entities.areas.Status;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Random;

@Entity(name="Patient")
@Table(name="patient")
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String lastName;
    private LocalDate register;//need local date for age or int age
    @ManyToOne
    private Address address;
    @ManyToOne
    private Agent agent;
    private int age;
    @Enumerated(EnumType.STRING)
    private Status status;

    private int phone;
    private String email;




}
