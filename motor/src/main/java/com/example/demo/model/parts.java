package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="parts")
public class parts {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private int shelve_number;
	private String name;
	private int price;
	private String model;
	
	
	
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getShelve_number() {
		return shelve_number;
	}
	public void setShelve_number(int shelve_number) {
		this.shelve_number = shelve_number;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public parts(int id, int shelve_number, String name, int price) {
		super();
		this.id = id;
		this.shelve_number = shelve_number;
		this.name = name;
		this.price = price;
	}
	public parts() {
	
	}
	
	

}
