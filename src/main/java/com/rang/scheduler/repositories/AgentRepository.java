package com.rang.scheduler.repositories;

import com.rang.scheduler.entities.Agent;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AgentRepository extends JpaRepository<Agent, Long> {
}
