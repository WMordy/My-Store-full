package com.example.store.service;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.store.dao.ProductDao;
import com.example.store.dao.SectionDao;
import com.example.store.model.Page;
import com.example.store.model.Product;
import com.example.store.model.Section;
@Service
public class AdminService {
	
	public ArrayList<Page> FetchPages(){
		ArrayList<Page> pages = null ; 
		return pages ;
	}
	
	@Autowired
	SectionDao sectionDao;
	@Autowired
	ProductDao productDao;
	public void addSection(Section s) {
		
			s.setSectionId(UUID.randomUUID());
		
		
		sectionDao.save(s);
	}
	public ArrayList<Section> getSections() {
		ArrayList<Section> sectionsList = new ArrayList<>();
		sectionDao.findAll().forEach((section)->{
			sectionsList.add(section);
		});
		return sectionsList;
	}
	public void deleteSection(UUID id) {
		//System.out.println(sectionDao.findById(id).toString());
		//Section s = sectionDao.findById(id).orElseThrow();
		//System.out.println(s.getName());
		sectionDao.deleteById(id);
	}
	public void updateSection(Section s) {
		//System.out.println(s.getSectionId());
		//sectionDao.findById(s.getSectionId());
		sectionDao.save(s);
	}
	public ArrayList <Product> getSectionProducts(UUID sectionID){
		ArrayList<Product> products = null ; 
		return products ;
		
	}
	
	
	public UUID createProduct(Product p ,UUID sectionID) {
		
		System.out.println(sectionID);
		Section s = sectionDao.findById(sectionID).orElse(null);
		if(s!=null) {
			p.setSection(s);
			productDao.save(p);
		}
		else {
			System.out.println("cant find section");
		}
		System.out.println(s.getName());
		System.out.println(p.toString());
		return p.getProductId();
	}
	
	public Product GetProduct(UUID id) {
		Product p = null ;
		return p ;
	}
	public ArrayList<Product> getAllProduct() {
		ArrayList<Product> productList = new ArrayList<>();
		productDao.findAll().forEach((product)->{
			productList.add(product);
		});
		return productList ;
	}
	
	public void UpdateProduct(Product p,UUID sectionID) {
		Section s = sectionDao.findById(sectionID).orElse(null);
		if(s!=null) {
			p.setSection(s);
			productDao.save(p);
		}
		else {
			System.out.println("cant find section");
		}
		productDao.save(p);
		
		
		
	}
	
	public void  DeleteProduct(UUID id) {
		productDao.deleteById(id);
	}
	
	
	

}
