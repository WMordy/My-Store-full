package com.example.store.dao;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.store.model.Product;

@Repository
public interface ProductDao extends CrudRepository<Product,UUID>{
	

}
