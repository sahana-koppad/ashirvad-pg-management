package com.ashirvad.pg.controller;

import com.ashirvad.pg.entity.Complaint;
import com.ashirvad.pg.Service.ComplaintService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/complaints")
public class ComplaintController {

    private final ComplaintService complaintService;

    public ComplaintController(ComplaintService complaintService) {
        this.complaintService = complaintService;
    }

    @PostMapping
    public ResponseEntity<Complaint> addComplaint(
            @RequestBody Complaint complaint
    ) {
        Complaint savedComplaint = complaintService.addComplaint(complaint);

        return new ResponseEntity<>(savedComplaint, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Complaint>> getAllComplaints() {
        return ResponseEntity.ok(complaintService.getAllComplaints());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Complaint> getComplaintById(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(complaintService.getComplaintById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Complaint> updateComplaint(
            @PathVariable Long id,
            @RequestBody Complaint complaint
    ) {
        return ResponseEntity.ok(
                complaintService.updateComplaint(id, complaint)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteComplaint(
            @PathVariable Long id
    ) {
        complaintService.deleteComplaint(id);

        return ResponseEntity.ok("Complaint deleted successfully");
    }
}