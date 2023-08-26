package com.rang.scheduler.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity(name="Address")
@Table(name="address")
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String state;
    private String description;

}
