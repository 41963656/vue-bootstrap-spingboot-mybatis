package com.leadingsoft.app.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leadingsoft.app.entity.DemoEntity;
import com.leadingsoft.app.orm.mapper.DemoMapper;
import com.leadingsoft.app.services.DemoService;

@Service
public class DemoServiceImpl implements DemoService {

	@Autowired
	DemoMapper demoMapper;

	public List<DemoEntity> getAll() {
		return demoMapper.getDemos();
	}
}
