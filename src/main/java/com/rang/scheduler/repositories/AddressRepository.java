package com.rang.scheduler.repositories;

import com.rang.scheduler.entities.Address;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AddressRepository extends JpaRepository<Address, Long> {
}
