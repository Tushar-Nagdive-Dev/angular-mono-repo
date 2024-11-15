package com.inn.auth_server_exp.utils;

import java.util.ArrayList;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import com.inn.auth_server_exp.PrintExceptionLogs;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;

public class JwtUtils {

    private static final Logger log = LoggerFactory.getLogger(JwtUtils.class);
    private static final String SECRET_KEY = "EXP-ACCESS";
    private static final long EXPIRATION_TIME = 900_000;

    public static String getSecretKey() {
        return SECRET_KEY;
    }

    public static String generateToken(String username) { 
        return Jwts.builder() 
            .setSubject(username) 
            .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME)) 
            .signWith(SignatureAlgorithm.HS512, SECRET_KEY.getBytes()) 
            .compact(); 
    }

    public static UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
        log.info("Inside @class JwtUtils @method getAuthentication ");
        try {
            String token = request.getHeader("Authorization");
            if (StringUtils.isNotEmpty(token)) {
                Claims claims = Jwts.parser()
                    .setSigningKey(SECRET_KEY.getBytes())
                    .parseClaimsJws(token.replace("Bearer", ""))
                    .getBody();
                
                String user = claims.getSubject();

                if(StringUtils.isNotEmpty(user)) {
                    return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
                }
                return null;
            }
            return null;
        } catch (Exception e) {
            PrintExceptionLogs.printException(JwtUtils.class, "getAuthentication", e);
            return null;
        }
    }
}
