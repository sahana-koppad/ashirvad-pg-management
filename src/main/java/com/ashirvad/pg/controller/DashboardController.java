package com.ashirvad.pg.controller;

import com.ashirvad.pg.repository.ComplaintRepository;
import com.ashirvad.pg.repository.NoticeRepository;
import com.ashirvad.pg.repository.ResidentRepository;
import com.ashirvad.pg.repository.RoomRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    private final RoomRepository roomRepository;
    private final ResidentRepository residentRepository;
    private final ComplaintRepository complaintRepository;
    private final NoticeRepository noticeRepository;

    public DashboardController(
            RoomRepository roomRepository,
            ResidentRepository residentRepository,
            ComplaintRepository complaintRepository,
            NoticeRepository noticeRepository
    ) {
        this.roomRepository = roomRepository;
        this.residentRepository = residentRepository;
        this.complaintRepository = complaintRepository;
        this.noticeRepository = noticeRepository;
    }

    @GetMapping("/summary")
    public Map<String, Object> getDashboardSummary() {

        Map<String, Object> summary = new LinkedHashMap<>();

        long totalRooms = roomRepository.count();
        long totalResidents = residentRepository.count();
        long totalComplaints = complaintRepository.count();
        long totalNotices = noticeRepository.count();

        long openComplaints = complaintRepository.findAll()
                .stream()
                .filter(complaint ->
                        "OPEN".equalsIgnoreCase(complaint.getStatus()))
                .count();

        int totalBeds = roomRepository.findAll()
                .stream()
                .mapToInt(room -> room.getTotalBeds())
                .sum();

        int availableBeds = roomRepository.findAll()
                .stream()
                .mapToInt(room -> room.getAvailableBeds())
                .sum();

        int occupiedBeds = totalBeds - availableBeds;

        double occupancyPercentage = 0;

        if (totalBeds > 0) {
            occupancyPercentage =
                    ((double) occupiedBeds / totalBeds) * 100;
        }

        summary.put("totalRooms", totalRooms);
        summary.put("totalResidents", totalResidents);
        summary.put("totalComplaints", totalComplaints);
        summary.put("openComplaints", openComplaints);
        summary.put("totalNotices", totalNotices);
        summary.put("totalBeds", totalBeds);
        summary.put("occupiedBeds", occupiedBeds);
        summary.put("availableBeds", availableBeds);
        summary.put("occupancyPercentage",
                Math.round(occupancyPercentage * 100.0) / 100.0);

        return summary;
    }
}