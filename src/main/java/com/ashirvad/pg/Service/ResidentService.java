package com.ashirvad.pg.Service;

import com.ashirvad.pg.entity.Resident;

import java.util.List;

public interface ResidentService {

    Resident addResident(Resident resident);

    List<Resident> getAllResidents();

    Resident getResidentById(Long id);

    Resident updateResident(Long id, Resident resident);

    void deleteResident(Long id);
}