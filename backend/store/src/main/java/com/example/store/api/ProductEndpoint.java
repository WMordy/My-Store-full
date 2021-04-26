package com.example.store.api;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.store.model.Product;
@RequestMapping("/api/v1")
@RestController
public class ProductEndpoint {
	
	@PostMapping("/product")
	public void addProduct(@RequestBody Product p ) {
		System.out.println("Product Added");
	}
	
	
	

}
