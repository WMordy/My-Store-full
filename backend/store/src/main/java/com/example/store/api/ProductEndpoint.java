package com.example.store.api;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.store.model.Product;
import com.example.store.service.AdminService;
@RequestMapping("/api/v1")
@RestController
public class ProductEndpoint {
	@Autowired
	AdminService adminService;
	@PostMapping("/product/{sectionID}")
	public void addProduct(@RequestBody Product p, @PathVariable UUID sectionID ) {
		System.out.println(p.toString());
		adminService.createProduct(p, sectionID);
	}
	@GetMapping("/products")
	public ArrayList<Product> getAllProducts(){
		return adminService.getAllProduct();
	}
	
	
	

}
