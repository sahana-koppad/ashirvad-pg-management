package com.ashirvad.pg.Service;

import com.ashirvad.pg.entity.Room;

import java.util.List;

public interface RoomService {

    Room addRoom(Room room);

    List<Room> getAllRooms();
    Room getRoomById(Long id);
    Room updateRoom(Long id,Room room);

    void deleteRoom(Long id);
}
