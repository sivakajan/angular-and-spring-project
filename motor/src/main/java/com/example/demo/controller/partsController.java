package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.parts;
import com.example.demo.reposi.motorRepos;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class partsController {
	@Autowired
	private motorRepos motorRe;
	
	@GetMapping("/hi")
	public String sayhi() {
		return "hi motor parts";
	}
	
	@PostMapping("/save")
	public parts saved(@RequestBody parts part)
	{
		return motorRe.save(part);
	}
	
	@GetMapping("/getall")
	public List<parts> getall(){
		return motorRe.findAll();
	}
	
	@GetMapping("/getnames/{name}")
	public List<parts> getnames(@PathVariable String name){
		return motorRe.findByName(name);
	}
	
	@PutMapping("/update/{id}")
	public parts updateparts(@PathVariable(value = "id") int id,@RequestBody parts partDetails) {
		parts part=motorRe.findById(id).orElseThrow(()->new ResourceNotFoundException("parts", "id", id));
		part.setName(partDetails.getName());
		part.setPrice(partDetails.getPrice());
		part.setShelve_number(partDetails.getShelve_number());
		
		parts updateParts=motorRe.save(part);
		
		return updateParts;
		
		
	}

}
