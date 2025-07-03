package com.example.demo.controller;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.UserModel;
import com.example.demo.service.UserService;
import com.example.demo.viewmodel.UserAccountRequest;

@RestController
@RequestMapping("/api/users")
public class UserAccountController {

    @Autowired
    private UserService userService;

    // CORS enabled only for frontend origin (adjust if needed)
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/createAccount")
    public ResponseEntity<?> createAccount(@RequestBody UserAccountRequest userRequest) {
        try {
            // Convert view model to entity
            UserModel userModel = new UserModel();
            userModel.setEmail(userRequest.getEmail());
            userModel.setPassword(userRequest.getPassword());

            // Save to DB
            UserModel savedUser = userService.createAccount(userModel);

            // Return success response in JSON
            return ResponseEntity.ok(Map.of(
                "message", "Account created for: " + savedUser.getEmail()
            ));
        } catch (IllegalArgumentException e) {
            // Return validation error in JSON
            return ResponseEntity.badRequest().body(Map.of(
                "message", e.getMessage()
            ));
        } catch (Exception e) {
            // Return generic error in JSON
            return ResponseEntity.internalServerError().body(Map.of(
                "message", "Something went wrong"
            ));
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody UserAccountRequest userRequest) {
        try {
            UserModel userModel = new UserModel();
            userModel.setEmail(userRequest.getEmail());
            userModel.setPassword(userRequest.getPassword());

            if (userService.login(userModel)) {
                return ResponseEntity.ok(Map.of(
                    "message", "Login successful for: " + userModel.getEmail()
                ));
            }
            else {
                return ResponseEntity.ok(Map.of(
                    "error", "Invalid email or password"
                ));
            }
        }
        catch(Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of(
                "error", "An error occurred: " + e.getMessage()
            ));
        }
    }

}
