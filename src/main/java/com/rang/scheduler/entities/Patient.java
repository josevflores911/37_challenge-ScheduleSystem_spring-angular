package com.rang.scheduler.entities;

import jakarta.persistence.*;
import lombok.*;

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
    private String adress;
    private int age;
    private int phone;
    private String email;



}
