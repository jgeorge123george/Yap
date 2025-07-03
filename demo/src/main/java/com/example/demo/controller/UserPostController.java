package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.PostModel;
import com.example.demo.model.UserModel;
import com.example.demo.repository.PostRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.viewmodel.PostRequest;

@RestController
@RequestMapping("/profile")
@CrossOrigin(origins = "http://localhost:3000")
public class UserPostController {


    private PostRequest request;

   @Autowired
   private UserRepository userRepository;

   @Autowired
   private PostRepository postRepository;

    @PostMapping("/post")
    public ResponseEntity<?> createPost(@RequestBody PostRequest postRequest) {
        String email = postRequest.getEmail();
        String content = postRequest.getContent();

        UserModel user = userRepository.findByEmail(email);
        
        if (user != null) {
            PostModel post = new PostModel(user, content);
            PostModel savedPost = postRepository.save(post);
            return ResponseEntity.ok(savedPost);
        }
        else {
            return ResponseEntity.badRequest().body("User not found");
        }

    }
    
}
