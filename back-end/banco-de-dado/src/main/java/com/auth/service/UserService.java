package com.auth.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.auth.entity.User;

public interface UserService {

	BCryptPasswordEncoder passwordEncode();
	
    User save(User user);
        
    List<User> getAllUsers();
	
	User getUserById(long id);
	
	Optional<User> buscarPorId(Long id);
	
	User atualizar(User user, long id);
	
	void deletar(User user);
}
