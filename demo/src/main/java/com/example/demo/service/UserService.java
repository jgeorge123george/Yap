package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.UserModel;
import com.example.demo.repository.UserRepository;


@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    /**
     * Creates a new user account.
     *
     * @param user The UserModel object containing the new user's data.
     * @return The saved UserModel with a generated account ID.
     * @throws IllegalArgumentException if the email already exists.
     */
    public UserModel createAccount(UserModel user) {
    System.out.println("Calling save for user: " + user.getEmail());
    if (userRepository.existsByEmail(user.getEmail())) {
        throw new IllegalArgumentException("Email already exists!");
    }
    UserModel savedUser = userRepository.save(user);
    System.out.println("Saved with ID: " + savedUser.getAccountId());
    return savedUser;
}

    /**
     * Login to a existing account.
     *
     * @param user The UserModel object containing the login data.
     * @return true or false on whether the login was successful.
     */

    public boolean login(UserModel user) {
        if (userRepository.existsByEmailAndPassword(user.getEmail(), user.getPassword())) {
            System.out.println("Login Successful!");
            return true;
        }
        else {
           return false;
        }
    }


}

