package coo.inn.expense.manager.configs.filters;

import java.io.IOException;
import java.util.ArrayList;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.StringUtils;


public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private final String secretKey;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, String secretKey) {
        super(authenticationManager);
        this.secretKey = secretKey;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        String header = request.getHeader("Authorization");

        // Check if header is missing or does not contain a Bearer token
        if (header == null || !header.startsWith("Bearer ")) {
            chain.doFilter(request, response);
            return;
        }

        // Get authentication from the token
        UsernamePasswordAuthenticationToken authentication = getAuthentication(header);

        // Set authentication in the security context if token is valid
        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(request, response);
    }

    private UsernamePasswordAuthenticationToken getAuthentication(String token) {
        if (StringUtils.isNotEmpty(token)) {
            try {
                // Parse the JWT token
                Claims claims = Jwts.parser()
                        .setSigningKey(secretKey.getBytes())
                        .parseClaimsJws(token.replace("Bearer ", ""))
                        .getBody();

                String username = claims.getSubject();

                if (StringUtils.isNotEmpty(username)) {
                    // Return an authenticated token with an empty list of authorities
                    return new UsernamePasswordAuthenticationToken(username, null, new ArrayList<>());
                }
            } catch (Exception e) {
                logger.error("Failed to parse JWT token", e);
            }
        }
        return null;
    }
}
