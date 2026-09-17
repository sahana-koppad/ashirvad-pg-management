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
    @Override
    public Room addRoom(Room room){
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
