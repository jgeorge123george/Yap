package com.example.demo.viewmodel;

import jakarta.validation.constraints.NotBlank;

public class PostRequest {
    
    @NotBlank
    private String email;

    @NotBlank
    private String content;


    public PostRequest() {}


    public PostRequest(String email, String content) {
        this.email = email;
        this.content = content;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEamil(String email) {
        this.email = email;
    }

    public String getContent() {
        return this.content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
