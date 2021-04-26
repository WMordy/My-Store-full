package com.example.store.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.store.model.Page;

@Repository
public interface PageDao extends CrudRepository<Page,Long>{

}
