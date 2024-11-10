package com.inn.auth_server_exp.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.inn.auth_server_exp.entity.Users;


public interface UserRepository extends JpaRepository<Users, Long>{
    Optional<Users> findByUsername(String username);
}
