package com.example.backend.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.userDto;
import com.example.backend.models.user;
import com.example.backend.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping(value = "/api/v1/user")
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<userDto> userRegistration(@RequestBody userDto userDto) {

        
        return ResponseEntity.status(200).body(userService.createUser(userDto));
    }

    @PostMapping("/login")
    public ResponseEntity<?> userLogin(@RequestBody userDto userDto) {
        System.out.println(userDto);
       
        userDto authUser = userService.login(userDto.getEmail(),userDto.getPassword());
        
        if(authUser!=null){
            return ResponseEntity.ok(authUser);
        }else{
            return ResponseEntity.ok("Invalid username or password");
        }
    }
    
    
    
}
