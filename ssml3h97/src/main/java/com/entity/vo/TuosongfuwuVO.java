package com.entity.vo;

import com.entity.TuosongfuwuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import java.io.Serializable;
 

/**
 * 托送服务
 * 手机端接口返回实体辅助类 
 * （主要作用去除一些不必要的字段）
 * @author 
 * @email 
 * @date 2022-04-10 22:52:06
 */
public class TuosongfuwuVO  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 服务封面
	 */
	
	private String fuwufengmian;
		
	/**
	 * 服务价格
	 */
	
	private String fuwujiage;
		
	/**
	 * 服务范围
	 */
	
	private String fuwufanwei;
		
	/**
	 * 服务内容
	 */
	
	private String fuwuneirong;
		
	/**
	 * 联系手机
	 */
	
	private String lianxishouji;
				
	
	/**
	 * 设置：服务封面
	 */
	 
	public void setFuwufengmian(String fuwufengmian) {
		this.fuwufengmian = fuwufengmian;
	}
	
	/**
	 * 获取：服务封面
	 */
	public String getFuwufengmian() {
		return fuwufengmian;
	}
				
	
	/**
	 * 设置：服务价格
	 */
	 
	public void setFuwujiage(String fuwujiage) {
		this.fuwujiage = fuwujiage;
	}
	
	/**
	 * 获取：服务价格
	 */
	public String getFuwujiage() {
		return fuwujiage;
	}
				
	
	/**
	 * 设置：服务范围
	 */
	 
	public void setFuwufanwei(String fuwufanwei) {
		this.fuwufanwei = fuwufanwei;
	}
	
	/**
	 * 获取：服务范围
	 */
	public String getFuwufanwei() {
		return fuwufanwei;
	}
				
	
	/**
	 * 设置：服务内容
	 */
	 
	public void setFuwuneirong(String fuwuneirong) {
		this.fuwuneirong = fuwuneirong;
	}
	
	/**
	 * 获取：服务内容
	 */
	public String getFuwuneirong() {
		return fuwuneirong;
	}
				
	
	/**
	 * 设置：联系手机
	 */
	 
	public void setLianxishouji(String lianxishouji) {
		this.lianxishouji = lianxishouji;
	}
	
	/**
	 * 获取：联系手机
	 */
	public String getLianxishouji() {
		return lianxishouji;
	}
			
}