package com.inn.auth_server_exp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inn.auth_server_exp.dto.LoginRequest;
import com.inn.auth_server_exp.dto.RegistrationRequest;
import com.inn.auth_server_exp.entity.Users;
import com.inn.auth_server_exp.services.IUserService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    @Autowired
    private IUserService iUserService;

    @PostMapping("/register")
    public ResponseEntity<Users> registerUser(@RequestBody RegistrationRequest registrationRequest) {
        Users user = this.iUserService.registerUser(registrationRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }
    
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        // Authentication logic is handled in JwtAuthenticationFilter
        return ResponseEntity.ok("Login successful");
    }
    
}
