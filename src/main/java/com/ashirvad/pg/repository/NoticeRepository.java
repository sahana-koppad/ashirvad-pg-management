package com.ashirvad.pg.repository;

import com.ashirvad.pg.entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoticeRepository extends JpaRepository<Notice, Long> {
}