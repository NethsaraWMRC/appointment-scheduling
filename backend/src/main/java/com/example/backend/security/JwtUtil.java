package com.example.backend.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import javax.crypto.SecretKey;
import org.springframework.stereotype.Component;
import java.time.Instant;
import java.util.Date;

@Component
public class JwtUtil {

    private static final String SECRET_KEY = "15C7FC1955DF35934B5EEB948292315C7FC1955DF35934B5EEB9482923";
    private static final long EXPIRATION_TIME = 60 * 60 * 1000; // 1 hour

    private final SecretKey key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

    // Generate JWT Token
    public String generateToken(String email, Long id) {
        return Jwts.builder()
                .subject(email)  
                .claim("userId", id)  
                .issuedAt(Date.from(Instant.now()))  
                .expiration(Date.from(Instant.now().plusMillis(EXPIRATION_TIME)))
                .signWith(key, Jwts.SIG.HS256)  
                .compact();
    }

    // Extract Email from Token
    public String extractEmail(String token) {
        try {
            return Jwts.parser()
                    .verifyWith(key)  
                    .build()
                    .parseSignedClaims(token)
                    .getPayload()
                    .getSubject();
        } catch (JwtException e) {
            throw new JwtException("Invalid JWT token: " + e.getMessage(), e);
        }
    }

    // Extract User ID from Token
    public Long extractUserId(String token) {
        try {
            return Jwts.parser()
                    .verifyWith(key)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload()
                    .get("userId", Long.class);
        } catch (JwtException e) {
            throw new JwtException("Invalid JWT token", e);
        }
    }

    // Validate Token
    public boolean validateToken(String token, String email) {
        try {
            return extractEmail(token).equals(email) && !isTokenExpired(token);
        } catch (JwtException e) {
            return false;
        }
    }

    // Check if Token is Expired
    private boolean isTokenExpired(String token) {
        try {
            return Jwts.parser()
                    .verifyWith(key)
                    .build()
                    .parseSignedClaims(token)
                    .getPayload()
                    .getExpiration()
                    .before(new Date());
        } catch (JwtException e) {
            throw new JwtException("Invalid JWT token", e);
        }
    }
}