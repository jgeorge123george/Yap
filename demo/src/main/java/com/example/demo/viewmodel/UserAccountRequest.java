package com.example.demo.viewmodel;
import jakarta.validation.constraints.NotBlank;


public class UserAccountRequest {
    @NotBlank
    private String email;

    @NotBlank
    private String password;

    public UserAccountRequest() {}

    public UserAccountRequest(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
