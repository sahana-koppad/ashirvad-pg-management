package com.ashirvad.pg.Service.impl;

import com.ashirvad.pg.Service.RoomService;
import com.ashirvad.pg.entity.Room;
import com.ashirvad.pg.repository.RoomRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    public RoomServiceImpl(RoomRepository roomRepository){

        this.roomRepository=roomRepository;
    }
    private void validateRoom(Room room) {

        if (room.getRoomNumber() == null ||
                room.getRoomNumber().isBlank()) {
            throw new RuntimeException("Room number is required");
        }

        if (room.getTotalBeds() <= 0) {
            throw new RuntimeException("Total beds must be greater than zero");
        }

        if (room.getAvailableBeds() < 0) {
            throw new RuntimeException("Available beds cannot be negative");
        }

        if (room.getAvailableBeds() > room.getTotalBeds()) {
            throw new RuntimeException(
                    "Available beds cannot be greater than total beds"
            );
        }

        if (room.getMonthlyRent() <= 0) {
            throw new RuntimeException("Monthly rent must be greater than zero");
        }
    }
    @Override
    public Room addRoom(Room room){
        validateRoom(room);
        return roomRepository.save(room);
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Room getRoomById(Long id) {
        return roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found with id: " + id));
    }

    @Override
    public Room updateRoom(Long id, Room room) {

        Room existingRoom = getRoomById(id);

        validateRoom(room);

        existingRoom.setRoomNumber(room.getRoomNumber());
        existingRoom.setRoomType(room.getRoomType());
        existingRoom.setTotalBeds(room.getTotalBeds());
        existingRoom.setAvailableBeds(room.getAvailableBeds());
        existingRoom.setMonthlyRent(room.getMonthlyRent());

        return roomRepository.save(existingRoom);
    }

    @Override
    public void deleteRoom(Long id) {
        roomRepository.deleteById(id);
    }
}
