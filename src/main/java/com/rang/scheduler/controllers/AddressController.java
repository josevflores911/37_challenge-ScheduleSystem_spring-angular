package com.rang.scheduler.controllers;

import com.rang.scheduler.entities.Address;
import com.rang.scheduler.repositories.AddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/address")
@CrossOrigin("*")
public class AddressController {

    @Autowired
    private AddressRepository addressRepository;

    @GetMapping("/get/{id}")
    public ResponseEntity<Address> getDataById(@PathVariable Long id) {
        Address address = addressRepository.getReferenceById(id);

        if (address != null) {

            return ResponseEntity.ok(address);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/getall")
    public ResponseEntity<List<Address>> getAllData() {
        return ResponseEntity.ok(addressRepository.findAll());
    }
}
