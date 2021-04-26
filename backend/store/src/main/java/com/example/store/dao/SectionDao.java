package com.example.store.dao;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.store.model.Section;

@Repository
public interface SectionDao extends CrudRepository<Section,UUID> {

}
