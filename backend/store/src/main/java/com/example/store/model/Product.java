package com.example.store.model;

import java.util.ArrayList;
import java.util.UUID;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;


@Entity
@Table
public class Product {
	@Id
	@Column( unique=true, nullable=false) 
	
	private UUID productId = UUID.randomUUID();
	private String title ;
	private String description ;
	private double price ;
	private String imageURL ;
	 @ManyToOne(fetch = FetchType.LAZY, optional = false)
	    @JoinColumn(name = "sectionId", nullable = false)
	@JsonIgnore
	 private Section section ;
	 @Column(  nullable=true) 
	private ArrayList<Hashtag> hashtags;
	
	
	
	public UUID getProductId() {
		return productId;
	}

	

	public Product( ) {
		
	}


	
	public Section getSection() {
		return section;
	}
	public void setSection(Section section) {
		this.section = section;
	}
	 public  Product(@JsonProperty String title,@JsonProperty double price ,@JsonProperty String description,@JsonProperty String imageURL) {
		
		this.productId = UUID.randomUUID();
		this.title = title;
		this.description = description ;
		this.price = price;
		this.imageURL = imageURL ;
	}
	
	@Override
	public String toString() {
		return "Product [productId=" + productId + ", title=" + title + ", description=" + description + ", price="
				+ price + ", imageURL=" + imageURL + ", section=" + section + "]";
	}

	public void setProductId(UUID productId) {
		this.productId = productId;
	}
	public String getNom() {
		return title;
	}
	public void setNom(String nom) {
		this.title = nom;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrix() {
		return price;
	}
	public void setPrix(double prix) {
		this.price = prix;
	}
	
	

}
