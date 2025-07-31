package com.example.demo.controller;

import java.security.Principal;

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

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PostRepository postRepository;

    @PostMapping("/post")
    public ResponseEntity<?> createPost(@RequestBody PostRequest postRequest, Principal principal) {
        System.out.println("🔥 [DEBUG] Entered createPost() endpoint");

        if (principal == null) {
            System.out.println("❌ [ERROR] Principal is null — JWT might be missing or invalid.");
            return ResponseEntity.status(401).body("Unauthorized: No principal found.");
        }

        String email = principal.getName(); // Extracted from JWT
        String content = postRequest.getContent();

        System.out.println("📩 [DEBUG] Email from token: " + email);
        System.out.println("📝 [DEBUG] Content from request body: " + content);

        if (email == null || email.isBlank()) {
            System.out.println("❌ [ERROR] Email from token is null or blank");
            return ResponseEntity.badRequest().body("Invalid user email");
        }

        if (content == null || content.isBlank()) {
            System.out.println("❌ [ERROR] Post content is null or blank");
            return ResponseEntity.badRequest().body("Post content cannot be empty");
        }

        UserModel user = userRepository.findByEmail(email);

        if (user == null) {
            System.out.println("❌ [ERROR] No user found in database for email: " + email);
            return ResponseEntity.badRequest().body("User not found");
        }

        System.out.println("✅ [DEBUG] User found: ID = " + user.getAccountId());

        try {
            PostModel post = new PostModel(user, content);
            PostModel savedPost = postRepository.save(post);

            System.out.println("✅ [DEBUG] Post saved to DB with ID = " + savedPost.getPostId());
            return ResponseEntity.ok(savedPost);
        } catch (Exception e) {
            System.out.println("❌ [ERROR] Exception while saving post: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(500).body("Internal server error");
        }
    }
}
