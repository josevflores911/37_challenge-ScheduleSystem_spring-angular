package com.rang.scheduler.repositories;


import com.rang.scheduler.entities.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    // You can add custom query methods here if needed
}
