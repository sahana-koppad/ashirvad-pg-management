package com.ashirvad.pg.repository;

import com.ashirvad.pg.entity.Complaint;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ComplaintRepository extends JpaRepository<Complaint, Long> {
}