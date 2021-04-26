package com.example.store.model;

import java.util.ArrayList;
import java.util.UUID;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;


@Entity
@Table
public class Product {
	@Id
	private UUID productId;
	private String nomProduct ;
	private String description ;
	private double prix ;
	 @ManyToOne(fetch = FetchType.LAZY, optional = false)
	    @JoinColumn(name = "sectionId", nullable = false)
	 private Section section ;
	private ArrayList<Hashtag> hashtags;
	
	
	
	public UUID getProductId() {
		return productId;
	}
	public Product(UUID productId, String nom, String description, double prix) {
		super();
		this.productId = productId;
		this.nomProduct = nom;
		this.description = description;
		this.prix = prix;
	}
	public Product(@JsonProperty String title,@JsonProperty Double price ,@JsonProperty String Description) {
		this.productId = UUID.randomUUID();
		this.nomProduct = title;
		this.description = Description ;
		this.prix = price;
		
	}
	public void setProductId(UUID productId) {
		this.productId = productId;
	}
	public String getNom() {
		return nomProduct;
	}
	public void setNom(String nom) {
		this.nomProduct = nom;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public double getPrix() {
		return prix;
	}
	public void setPrix(double prix) {
		this.prix = prix;
	}
	
	

}
