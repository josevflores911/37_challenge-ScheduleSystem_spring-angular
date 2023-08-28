package com.rang.scheduler.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.rang.scheduler.entities.areas.Status;
import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Random;

@Entity(name="Patient")
@Table(name="patient")
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties({"hibernateLazyInitializer"})
public class Patient implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String lastName;
    private LocalDate register;//need local date for age or int age

    @ManyToOne
    @JoinColumn(name = "address_id")
    private Address address;
    @ManyToOne
    @JoinColumn(name = "agent_id")
    private Agent agent;
    private int age;
    @Enumerated(EnumType.STRING)
    private Status status;

    private int phone;
    private String email;




}
