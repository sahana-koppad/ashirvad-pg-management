package com.ashirvad.pg.Service.impl;

import com.ashirvad.pg.entity.Resident;
import com.ashirvad.pg.repository.ResidentRepository;
import com.ashirvad.pg.Service.ResidentService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidentServiceImpl implements ResidentService {

    private final ResidentRepository residentRepository;

    public ResidentServiceImpl(ResidentRepository residentRepository) {
        this.residentRepository = residentRepository;
    }

    @Override
    public Resident addResident(Resident resident) {
        return residentRepository.save(resident);
    }

    @Override
    public List<Resident> getAllResidents() {
        return residentRepository.findAll();
    }

    @Override
    public Resident getResidentById(Long id) {
        return residentRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Resident not found with id: " + id));
    }

    @Override
    public Resident updateResident(Long id, Resident resident) {

        Resident existingResident = getResidentById(id);

        existingResident.setName(resident.getName());
        existingResident.setPhoneNumber(resident.getPhoneNumber());
        existingResident.setEmail(resident.getEmail());
        existingResident.setRoomNumber(resident.getRoomNumber());
        existingResident.setMonthlyRent(resident.getMonthlyRent());
        existingResident.setPaymentStatus(resident.getPaymentStatus());

        return residentRepository.save(existingResident);
    }

    @Override
    public void deleteResident(Long id) {
        residentRepository.deleteById(id);
    }
}