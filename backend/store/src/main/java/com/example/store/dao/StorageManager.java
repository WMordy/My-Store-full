package com.example.store.dao;

import org.springframework.boot.context.properties.ConfigurationProperties;


@ConfigurationProperties(prefix = "storage")
public class StorageManager {
	
	    private String location;

	    public String getUploadDir() {
	        return location;
	    }

	    public void setLocation(String location) {
	        this.location = location;
	    }
	        
	
}
