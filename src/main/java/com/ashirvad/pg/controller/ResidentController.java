package com.ashirvad.pg.controller;

import com.ashirvad.pg.entity.Resident;
import com.ashirvad.pg.Service.ResidentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/residents")
public class ResidentController {

    private final ResidentService residentService;

    public ResidentController(ResidentService residentService) {
        this.residentService = residentService;
    }

    @PostMapping
    public ResponseEntity<Resident> addResident(
            @RequestBody Resident resident
    ) {
        Resident savedResident = residentService.addResident(resident);

        return new ResponseEntity<>(savedResident, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Resident>> getAllResidents() {
        return ResponseEntity.ok(residentService.getAllResidents());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Resident> getResidentById(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(residentService.getResidentById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Resident> updateResident(
            @PathVariable Long id,
            @RequestBody Resident resident
    ) {
        return ResponseEntity.ok(
                residentService.updateResident(id, resident)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteResident(
            @PathVariable Long id
    ) {
        residentService.deleteResident(id);

        return ResponseEntity.ok("Resident deleted successfully");
    }
}