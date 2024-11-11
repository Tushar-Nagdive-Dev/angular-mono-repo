package com.inn.auth_server_exp.services;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.inn.auth_server_exp.dto.RegistrationRequest;
import com.inn.auth_server_exp.entity.Users;

public interface IUserService extends UserDetailsService {

    public Users registerUser(RegistrationRequest registrationRequest);
}
