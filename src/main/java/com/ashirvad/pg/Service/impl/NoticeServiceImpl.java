package com.ashirvad.pg.Service.impl;

import com.ashirvad.pg.entity.Notice;
import com.ashirvad.pg.repository.NoticeRepository;
import com.ashirvad.pg.Service.NoticeService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class NoticeServiceImpl implements NoticeService {

    private final NoticeRepository noticeRepository;

    public NoticeServiceImpl(NoticeRepository noticeRepository) {
        this.noticeRepository = noticeRepository;
    }

    @Override
    public Notice addNotice(Notice notice) {

        if (notice.getNoticeDate() == null ||
                notice.getNoticeDate().isBlank()) {
            notice.setNoticeDate(LocalDateTime.now().toString());
        }

        return noticeRepository.save(notice);
    }

    @Override
    public List<Notice> getAllNotices() {
        return noticeRepository.findAll();
    }

    @Override
    public Notice getNoticeById(Long id) {
        return noticeRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Notice not found with id: " + id));
    }

    @Override
    public Notice updateNotice(Long id, Notice notice) {

        Notice existingNotice = getNoticeById(id);

        existingNotice.setTitle(notice.getTitle());
        existingNotice.setMessage(notice.getMessage());
        existingNotice.setNoticeDate(notice.getNoticeDate());

        return noticeRepository.save(existingNotice);
    }

    @Override
    public void deleteNotice(Long id) {
        noticeRepository.deleteById(id);
    }
}