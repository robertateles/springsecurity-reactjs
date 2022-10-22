package com.auth.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.auth.entity.User;
import com.auth.exception.RegraNegocio;
import com.auth.repositories.UserRepository;
import com.auth.service.UserService;
import com.exception.ResourceNotFoundException;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository userRepository;
	
	@Override
	public BCryptPasswordEncoder passwordEncode() {
			return new BCryptPasswordEncoder();
	}
	
	@Override
	public User save(User user) {
		User existsUser = userRepository.findByUsername(user.getUsername());

	    if (existsUser != null) {
	      throw new RegraNegocio("User already exists!");
	    }
	    
	    user.setPassword(passwordEncode().encode(user.getPassword()));
	    
	    User createdUser = userRepository.save(user);

	    return createdUser;
		
	}

	@Override
	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	@Override
	public User getUserById(long id) {
		return userRepository.findById(id).orElseThrow(() ->
		new ResourceNotFoundException("Usuário", "id", id));
	}

	@Override
	public Optional<User> buscarPorId(Long id) {
		return userRepository.findById(id);
	}

	@Override
	public User atualizar(User user, long id) {
		User userExists = userRepository.findById(id).orElseThrow(() ->
		new ResourceNotFoundException("Usuário", "id", id));
		
		userExists.setName(user.getName());
		userExists.setUsername(user.getUsername());
		userExists.setPassword(user.getPassword());
		
		userRepository.save(userExists);
		return userExists;
	}

	@Override
	public void deletar(User user) {
		Objects.requireNonNull(user.getId());
		userRepository.delete(user);
		
	}

	
}
