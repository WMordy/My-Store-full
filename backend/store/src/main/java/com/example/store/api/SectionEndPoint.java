package com.example.store.api;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.store.model.Section;
import com.example.store.service.AdminService;

@RequestMapping("/api/v1")
@RestController
public class SectionEndPoint {
	@Autowired
	AdminService adminService = new AdminService() ;
	@PostMapping("/section")
	public void addSection(@RequestBody Section s) {
		adminService.addSection(s);
		System.out.println("Section Added");
	}
	
	@GetMapping("/sections")
	public ArrayList<Section> getSections() {
		ArrayList<Section> sections = adminService.getSections();
		System.out.println("Sections");
		return sections;
	}
	@PutMapping("/section")
	public void updateSection(@RequestBody Section s) {
		adminService.updateSection(s);
	}
	@DeleteMapping("/section")
	public void deleteSection(@RequestBody UUID sectionID) {
		adminService.deleteSection(sectionID);
	}
	
}
