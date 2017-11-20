package com.leadingsoft.app.orm.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.leadingsoft.app.entity.DemoEntity;

public interface DemoMapper {

	@Select("select * from DEMO_")
	@Results({ @Result(property = "id", column = "ID_"), @Result(property = "name", column = "NAME_"),
			@Result(property = "sex", column = "SEX_") })
	List<DemoEntity> getDemos();

	@Select("SELECT * FROM DEMO_ WHERE ID_ = #{id}")
	@Results({ @Result(property = "id", column = "ID_"), @Result(property = "name", column = "NAME_"),
			@Result(property = "sex", column = "SEX_") })
	DemoEntity getOne(Long id);

	@Insert("INSERT INTO DEMO_(ID_,NAME_,SEX_) VALUES(#{id}, #{name}, #{sex})")
	void insert(DemoEntity demoPo);

	@Update("UPDATE DEMO_ SET NAME_=#{name},SEX_=#{sex} WHERE ID_ =#{id}")
	void update(DemoEntity demoPo);

	@Delete("DELETE FROM DEMO_ WHERE ID_ =#{id}")
	void delete(Long id);

}
