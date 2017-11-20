package com.leadingsoft.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leadingsoft.app.entity.DemoEntity;
import com.leadingsoft.app.services.DemoService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping(value = "/demo")
@Slf4j
public class DemoController {
	@Autowired
	private DemoService demoService;

	@RequestMapping("/getAll")
	public List<DemoEntity> getAll() {
		log.debug("Request GET Demos.....");
		return demoService.getAll();
	}

}
