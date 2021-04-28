package com.example.store.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.store.dao.StorageManager;
import com.example.store.service.UploadService;


@RequestMapping("/api/v1")
@RestController
public class Uploader {
	
	@Autowired
	UploadService uploadService ;
	
	Uploader(UploadService uploadService){
		this.uploadService = uploadService;
		uploadService.init();
	}
	
	@PostMapping("/upload")
	public String UploadImage(@RequestParam("file") MultipartFile file)   {
		
		try {
			return uploadService.storeFile(file);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "not uploaded";
	}
}
