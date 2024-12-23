package com.dao;

import com.entity.FuwudingdanEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.FuwudingdanVO;
import com.entity.view.FuwudingdanView;


/**
 * 服务订单
 * 
 * @author 
 * @email 
 * @date 2022-04-10 22:52:06
 */
public interface FuwudingdanDao extends BaseMapper<FuwudingdanEntity> {
	
	List<FuwudingdanVO> selectListVO(@Param("ew") Wrapper<FuwudingdanEntity> wrapper);
	
	FuwudingdanVO selectVO(@Param("ew") Wrapper<FuwudingdanEntity> wrapper);
	
	List<FuwudingdanView> selectListView(@Param("ew") Wrapper<FuwudingdanEntity> wrapper);

	List<FuwudingdanView> selectListView(Pagination page,@Param("ew") Wrapper<FuwudingdanEntity> wrapper);
	
	FuwudingdanView selectView(@Param("ew") Wrapper<FuwudingdanEntity> wrapper);
	

}
