package coo.inn.expense.manager.configs.filters;

import java.io.IOException;
import java.util.ArrayList;

import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import coo.inn.expense.manager.configs.JwtTokenContext;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private static final Logger log = LoggerFactory.getLogger(JwtAuthorizationFilter.class);
    private final String secretKey;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, @Value("${jwt.secret}") String secretKey) {
        super(authenticationManager);
        this.secretKey = secretKey;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        String header = request.getHeader("Authorization");

        // Check if header is missing or does not contain a Bearer token
        if (header == null || !header.startsWith("Bearer ")) {
            chain.doFilter(request, response); // No token, just proceed
            return;
        }

        // Extract token (without "Bearer " prefix)
        String token = header.replace("Bearer ", "");

        // Get authentication from the token
        UsernamePasswordAuthenticationToken authentication = getAuthentication(token);

        // If authentication is successful, set security context
        if (authentication != null) {
            JwtTokenContext.setUsername(authentication.getName());  // Set username from token claims
            JwtTokenContext.setUserId((Long) Jwts.parser()
                .setSigningKey(secretKey.getBytes())
                .parseClaimsJws(token)
                .getBody()
                .get("userId"));  // Set userId from token claims
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(String token) {
        if (StringUtils.isNotEmpty(token)) {
            try {
                // Parse the JWT token
                Claims claims = Jwts.parser()
                        .setSigningKey(secretKey.getBytes())
                        .parseClaimsJws(token)
                        .getBody();

                String username = claims.getSubject();
                Long userId = (Long) claims.get("userId");

                log.info("Claims - Username: {}, UserId: {}", username, userId);

                if (StringUtils.isNotEmpty(username)) {
                    // Return an authenticated token with an empty list of authorities
                    return new UsernamePasswordAuthenticationToken(username, null, new ArrayList<>());
                }
            } catch (Exception e) {
                log.error("Failed to parse JWT token", e);
            }
        }
        return null;
    }
}
