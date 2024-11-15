package com.inn.auth_server_exp.controllers;

import java.util.HashMap;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.inn.auth_server_exp.dto.LoginRequest;
import com.inn.auth_server_exp.dto.RegistrationRequest;
import com.inn.auth_server_exp.entity.Users;
import com.inn.auth_server_exp.services.IUserService;
import com.inn.auth_server_exp.utils.JwtUtils;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private static final Logger log = LoggerFactory.getLogger(AuthController.class);
    private static final String SUCCESS = "SUCCESS";

    @Autowired
    private IUserService iUserService;

    @PostMapping("/register")
    public ResponseEntity<Users> registerUser(@RequestBody RegistrationRequest registrationRequest) {
        Users user = this.iUserService.registerUser(registrationRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String, String>> login(@RequestBody LoginRequest loginRequest) {
        log.info("Inside @class AuthController @method login loginRequest :: {}", loginRequest.toString());
        
        // Assuming the user is authenticated at this point
        String token = JwtUtils.generateToken(loginRequest.getUsername());

        // Create response map
        Map<String, String> responseMap = new HashMap<>();
        responseMap.put("status", SUCCESS);
        responseMap.put("token", token); // Add the token to the response map

        return ResponseEntity.ok(responseMap);
    }
    
}
