package com.rang.scheduler.repositories;

import com.rang.scheduler.entities.Patient;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Long> {
    Patient findByDni(String dni);
}

