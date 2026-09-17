package com.ashirvad.pg.Service.impl;

import com.ashirvad.pg.entity.Complaint;
import com.ashirvad.pg.repository.ComplaintRepository;
import com.ashirvad.pg.Service.ComplaintService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.time.LocalDateTime;

@Service
public class ComplaintServiceImpl implements ComplaintService {

    private final ComplaintRepository complaintRepository;

    public ComplaintServiceImpl(ComplaintRepository complaintRepository) {
        this.complaintRepository = complaintRepository;
    }

    @Override
    public Complaint addComplaint(Complaint complaint) {

        if (complaint.getStatus() == null ||
                complaint.getStatus().isBlank()) {
            complaint.setStatus("OPEN");
        }

        if (complaint.getPriority() == null ||
                complaint.getPriority().isBlank()) {
            complaint.setPriority("MEDIUM");
        }

        if (complaint.getCreatedDate() == null ||
                complaint.getCreatedDate().isBlank()) {
            complaint.setCreatedDate(LocalDateTime.now().toString());
        }

        return complaintRepository.save(complaint);
    }

    @Override
    public List<Complaint> getAllComplaints() {
        return complaintRepository.findAll();
    }

    @Override
    public Complaint getComplaintById(Long id) {
        return complaintRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Complaint not found with id: " + id));
    }

    @Override
    public Complaint updateComplaint(Long id, Complaint complaint) {

        Complaint existingComplaint = getComplaintById(id);

        existingComplaint.setResidentName(complaint.getResidentName());
        existingComplaint.setTitle(complaint.getTitle());
        existingComplaint.setDescription(complaint.getDescription());
        existingComplaint.setStatus(complaint.getStatus());
        existingComplaint.setPriority(complaint.getPriority());
        existingComplaint.setCreatedDate(complaint.getCreatedDate());
        return complaintRepository.save(existingComplaint);
    }

    @Override
    public void deleteComplaint(Long id) {
        complaintRepository.deleteById(id);
    }
}