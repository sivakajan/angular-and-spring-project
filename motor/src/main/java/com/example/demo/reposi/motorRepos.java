package com.example.demo.reposi;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.parts;

public interface motorRepos extends JpaRepository<parts, Integer> {

	List<parts> findByName(String name);

}
