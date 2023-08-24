package com.rang.scheduler.entities;

import com.rang.scheduler.entities.areas.Specialization;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity(name="Schedule")
@Table(name="schedules")
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id")
    private Patient patient;

    private LocalDate date;

    private Specialization specialization;


}
