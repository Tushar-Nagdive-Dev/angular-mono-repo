package com.inn.auth_server_exp.configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

import com.inn.auth_server_exp.configs.filters.JwtAuthenticationFilter;
import com.inn.auth_server_exp.configs.filters.JwtAuthorizationFilter;
import com.inn.auth_server_exp.services.IUserService;

@Configuration
@EnableWebSecurity
public class CustomSecurityConfig {
    
    private UserDetailsService userDetailsService;

    private IUserService iUserService;

    public CustomSecurityConfig(UserDetailsService userDetailsService, IUserService iUserService) {
        this.userDetailsService = userDetailsService;
        this.iUserService = iUserService;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/auth/**").permitAll()
                .anyRequest().authenticated())
            .sessionManagement(sess -> sess
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .addFilter(new JwtAuthenticationFilter(authenticationManager(http.getSharedObject(AuthenticationManagerBuilder.class))))
            .addFilter(new JwtAuthorizationFilter(authenticationManager(http.getSharedObject(AuthenticationManagerBuilder.class))))
            .build();
    }
    

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
        return auth.build();
    }
}
