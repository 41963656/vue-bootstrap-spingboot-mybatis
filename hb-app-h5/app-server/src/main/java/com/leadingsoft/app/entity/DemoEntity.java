package com.leadingsoft.app.entity;

import java.io.Serializable;

import lombok.Data;

@Data 
public class DemoEntity implements Serializable {
	/**
	 * Serializable
	 */
	private static final long serialVersionUID = 4905501523079503818L;
	private Long id;
	private String name;
	private String sex;

}
