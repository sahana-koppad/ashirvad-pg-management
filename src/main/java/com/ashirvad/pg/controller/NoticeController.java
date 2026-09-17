package com.ashirvad.pg.controller;

import com.ashirvad.pg.entity.Notice;
import com.ashirvad.pg.Service.NoticeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notices")
public class NoticeController {

    private final NoticeService noticeService;

    public NoticeController(NoticeService noticeService) {
        this.noticeService = noticeService;
    }

    @PostMapping
    public ResponseEntity<Notice> addNotice(
            @RequestBody Notice notice
    ) {
        Notice savedNotice = noticeService.addNotice(notice);

        return new ResponseEntity<>(savedNotice, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Notice>> getAllNotices() {
        return ResponseEntity.ok(noticeService.getAllNotices());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Notice> getNoticeById(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(noticeService.getNoticeById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Notice> updateNotice(
            @PathVariable Long id,
            @RequestBody Notice notice
    ) {
        return ResponseEntity.ok(
                noticeService.updateNotice(id, notice)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNotice(
            @PathVariable Long id
    ) {
        noticeService.deleteNotice(id);

        return ResponseEntity.ok("Notice deleted successfully");
    }
}