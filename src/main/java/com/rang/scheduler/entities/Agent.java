package com.rang.scheduler.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity(name="Agent")
@Table(name="agent")
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Agent {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String image;

}
