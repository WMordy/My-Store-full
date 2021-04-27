package com.example.store.model;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;


@Entity
@Table
public class Section {

	@Id
	
	@Column( unique=true, nullable=false) 
	private UUID sectionId = UUID.randomUUID() ;
	private int pageID;
	private String slogan ;
	private String name ;
	@OneToMany(mappedBy = "section", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
	private List<Product> productsList ;
	
	

	public Section() {
		super();
	}
	public Section(@JsonProperty String slogan, @JsonProperty int pageID, @JsonProperty String name) {
		super();
		this.sectionId = UUID.randomUUID();
		this.name = name ;
		this.slogan = slogan ;
		this.pageID = pageID ;
		
	}
	public Section(@JsonProperty String slogan, @JsonProperty int pageID, @JsonProperty String name, @JsonProperty UUID sectionId) {
		super();
		this.sectionId = sectionId;
		this.name = name ;
		this.slogan = slogan ;
		this.pageID = pageID ;
		
	}
	public UUID getSectionId() {
		return sectionId;
	}
	public void setSectionId(UUID sectionId) {
		this.sectionId = sectionId;
	}
	public String getSlogan() {
		return slogan;
	}
	public void setSlogan(String slogan) {
		this.slogan = slogan;
	}
	public List<Product> getProductsList() {
		return productsList;
	}
	public void setProductsList(ArrayList<Product> productsList) {
		this.productsList = productsList;
	}
	public int getPageID() {
		return pageID;
	}
	public void setPageID(int pageID) {
		this.pageID = pageID;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	

}
