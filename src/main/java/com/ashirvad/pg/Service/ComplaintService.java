package com.ashirvad.pg.Service;

import com.ashirvad.pg.entity.Complaint;

import java.util.List;

public interface ComplaintService {

    Complaint addComplaint(Complaint complaint);

    List<Complaint> getAllComplaints();

    Complaint getComplaintById(Long id);

    Complaint updateComplaint(Long id, Complaint complaint);

    void deleteComplaint(Long id);
}