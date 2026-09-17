package com.ashirvad.pg.repository;

import com.ashirvad.pg.entity.Resident;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ResidentRepository extends JpaRepository<Resident,Long> {
}
