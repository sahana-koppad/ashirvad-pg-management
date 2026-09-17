package com.ashirvad.pg.Service;

import com.ashirvad.pg.entity.Notice;

import java.util.List;

public interface NoticeService {

    Notice addNotice(Notice notice);

    List<Notice> getAllNotices();

    Notice getNoticeById(Long id);

    Notice updateNotice(Long id, Notice notice);

    void deleteNotice(Long id);
}