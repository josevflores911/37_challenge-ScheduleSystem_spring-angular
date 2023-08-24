package com.rang.scheduler.entities;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Entity(name="users")
@Table(name="Users")
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;
    @Email(message = "Invalid email format")
    @NotBlank(message = "Email is required")
    private String email;
    private String password;
}
