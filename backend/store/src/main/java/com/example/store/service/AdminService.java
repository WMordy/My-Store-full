package com.example.store.service;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	public ArrayList <Product> getSection(UUID sectionID){
		ArrayList<Product> products = null ; 
		return products ;
		
	}
	
	public void CreateProduct(Product p ) {
		
	}
	
	public Product GetProduct(UUID id) {
		Product p = null ;
		return p ;
	}
	
	public void UpdateProduct(Product p) {
		
	}
	
	public void  DeleteProduct(UUID id) {
		
	}
	
	
	

}
