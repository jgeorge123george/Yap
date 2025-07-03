package com.example.demo.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.PostModel;

public interface PostRepository extends JpaRepository<PostModel, Long> {

    
}
