package com.inn.auth_server_exp.services.impl;

import java.util.Arrays;
import java.util.Collection;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.inn.auth_server_exp.PrintExceptionLogs;
import com.inn.auth_server_exp.dto.RegistrationRequest;
import com.inn.auth_server_exp.entity.Users;
import com.inn.auth_server_exp.repo.UserRepository;
import com.inn.auth_server_exp.services.IUserService;

public class UserService implements IUserService{

    private static final Logger log = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public Users registerUser(RegistrationRequest registrationRequest) {
        try {
            log.info("Inside @class UserService @method registerUser registrationRequest :: {}", registrationRequest.toString());
            Users user = new Users();
            user.setUsername(registrationRequest.getUsername());
            user.setEmail(registrationRequest.getEmail());
            user.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));
            user.setRoles(registrationRequest.getRoles() != null ? registrationRequest.getRoles() : "USER");
            log.debug("@class UserService @method registerUser user :: {}", user);
            user = this.userRepo.save(user);
            return user;
        } catch (Exception e) {
            PrintExceptionLogs.printException(UserService.class, "registerUser", e);
            return null;
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        log.info("Inside @class UserService @method loadUserByUsername username :: {}", username);
        Users user = this.userRepo.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), getAuthorities(user));
    }

    private Collection<? extends GrantedAuthority> getAuthorities(Users user) {
        return Arrays.stream(user.getRoles().split(","))
            .map(SimpleGrantedAuthority::new)
            .collect(Collectors.toList());
    }
    
}
