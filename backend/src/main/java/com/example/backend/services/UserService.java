package com.example.backend.services;

import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.dto.userDto;
import com.example.backend.repo.UserRepo;
import com.example.backend.security.JwtUtil;
import com.example.backend.models.user;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

     @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public userDto createUser(userDto userDto){

        user newUser = modelMapper.map(userDto, user.class);

        newUser.setPasswordHash(passwordEncoder.encode(userDto.getPassword()));

        
        return modelMapper.map(userRepo.save(newUser), userDto.class);
    }

    public String login(String email, String password) {
        Optional<user> optionalUser = userRepo.findByEmail(email);

        if (optionalUser.isPresent()) {
            user foundUser = optionalUser.get();

            if (passwordEncoder.matches(password, foundUser.getPasswordHash())) {
              
                return jwtUtil.generateToken(email, foundUser.getId());
            }
        }
        return null;
    }
    
}
