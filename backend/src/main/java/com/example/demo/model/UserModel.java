package com.example.demo.model;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table (name = "user_info")
public class UserModel {
    

 @Id
 @GeneratedValue(strategy = GenerationType.IDENTITY)
 private Long accountId;

 @Column(nullable = false, unique = true)
 private String email;

 @Column(nullable = false)
 private String password;

 public UserModel() {}

 public UserModel(String email, String password) {
    this.email = email;
    this.password = password;
 }

 public Long getAccountId() {
    return this.accountId;
 }

 public String getEmail() {
    return this.email;
 }

 public String getPassword() {
    return this.password;
 }

 public void setEmail(String email) {
    this.email = email;
 }

 public void setPassword(String password) {
    this.password = password;
 }

 





}
