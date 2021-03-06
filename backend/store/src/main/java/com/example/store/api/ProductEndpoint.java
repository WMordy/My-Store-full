package com.example.store.api;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.store.model.Product;
import com.example.store.service.AdminService;
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
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
	
	@PutMapping("/product/{sectionID}")
	public void putProduct(@RequestBody Product p,@PathVariable UUID sectionID) {
		 adminService.UpdateProduct(p,sectionID);
	}
	@DeleteMapping("/product/{productID}")
	public void deleteProduct(@PathVariable UUID productID) {
		adminService.DeleteProduct(productID);
	}
	
	
	

}
