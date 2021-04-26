package com.example.store.model;

import java.util.ArrayList;
import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table
public class Page {
	@Id
	private long pageId ;
	private String pageName ;
	private String slogan ;
	private ArrayList<Section> sections ;
	
	public Page(long pageId, String pageName, String slogan, ArrayList<Section> sections) {
		super();
		this.pageId = pageId;
		this.pageName = pageName;
		this.slogan = slogan;
		this.sections = sections;
	}
	public long getPageId() {
		return pageId;
	}
	public void setPageId(long pageId) {
		this.pageId = pageId;
	}
	public String getPageName() {
		return pageName;
	}
	public void setPageName(String pageName) {
		this.pageName = pageName;
	}
	public String getSlogan() {
		return slogan;
	}
	public void setSlogan(String slogan) {
		this.slogan = slogan;
	}
	public ArrayList<Section> getSections() {
		return sections;
	}
	public void setSections(ArrayList<Section> sections) {
		this.sections = sections;
	}
	

}
