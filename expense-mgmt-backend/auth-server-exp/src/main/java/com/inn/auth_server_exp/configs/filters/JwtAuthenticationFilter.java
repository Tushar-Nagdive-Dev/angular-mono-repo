package com.inn.auth_server_exp.configs.filters;

import java.io.IOException;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.inn.auth_server_exp.PrintExceptionLogs;
import com.inn.auth_server_exp.entity.Users;
import com.inn.auth_server_exp.utils.JwtUtils;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter{

    private static final Logger log = LoggerFactory.getLogger(JwtAuthenticationFilter.class);
    
    private AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager){
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest req, HttpServletResponse res) throws AuthenticationException{
        log.info("Inside @class JwtAuthenticationFilter @method attemptAuthentication");
        try {
            Users creds = new ObjectMapper().readValue(req.getInputStream(), Users.class);
            return authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(creds.getUsername(), creds.getPassword(), new ArrayList<>()));
        } catch (IOException e) {
            PrintExceptionLogs.printException(JwtAuthenticationFilter.class, SPRING_SECURITY_FORM_PASSWORD_KEY, e);
            throw new RuntimeException(e);
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest req, HttpServletResponse res, FilterChain chain, Authentication auth) throws IOException, ServletException {
        log.info("Inside @class JwtAuthenticationFilter @method successfulAuthentication ");
        String token = JwtUtils.generateToken(auth.getName());
        res.addHeader("Authorization", "Bearer " + token);
    }
}
