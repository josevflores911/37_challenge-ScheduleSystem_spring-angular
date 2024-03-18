package com.rang.scheduler.controllers;

import com.rang.scheduler.entities.Agent;
import com.rang.scheduler.repositories.AgentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/agent")
@CrossOrigin("*")
public class AgentController {

    @Autowired
    private AgentRepository agentRepository;

    @GetMapping("/get/{id}")
    public ResponseEntity<Agent> getDataById(@PathVariable Long id) {
        Agent agent = agentRepository.getReferenceById(id);

        if (agent != null) {
            return ResponseEntity.ok(agent);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Agent>> getAllData() {
        return ResponseEntity.ok(agentRepository.findAll());
    }
}
