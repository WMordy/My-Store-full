package com.example.store.service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Date;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.example.store.dao.StorageManager;

@Service
public class UploadService {
	private final Path fileStorageLocation;

	@Autowired
	public UploadService(StorageManager fileStorageProperties)  {
		this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir()).toAbsolutePath();
		try {
			Files.createDirectories(this.fileStorageLocation);
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}
	@PostConstruct
    public void init() {
        try {
            Files.createDirectories(fileStorageLocation);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
	public String storeFile(MultipartFile file)  {
		         String originalFileName = StringUtils.cleanPath(file.getOriginalFilename());
		         String fileName = String.valueOf(new Date().toInstant().getEpochSecond());
		        
		         
		             fileName += "_" + originalFileName ;
		             Path targetLocation = this.fileStorageLocation.resolve(fileName);	
		             try {
						Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);
					} catch (IOException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}

		             return fileName;

		

		         

		

		     }

}
