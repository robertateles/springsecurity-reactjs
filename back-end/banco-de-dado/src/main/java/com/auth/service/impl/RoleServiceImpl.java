package com.auth.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth.dto.UserRoleDTO;
import com.auth.entity.Role;
import com.auth.entity.User;
import com.auth.exception.ErroAutenticacao;
import com.auth.repositories.UserRepository;
import com.auth.service.RoleService;

@Service
public class RoleServiceImpl implements RoleService{

	@Autowired
	UserRepository userRepository;
	
	@Override
	public User execute(UserRoleDTO userRoleDTO) {
		
		Optional<User> userExists = userRepository.findById(userRoleDTO.getIdUser());
		
		List<Role> roles = new ArrayList<>();
		
		if(userExists.isEmpty()) {
			throw new ErroAutenticacao("Usuário não encontrado");
		}
		
		roles = userRoleDTO.getIdsRoles().stream().map(role -> {
			return new Role(role);
		}).collect(Collectors.toList());
//				.getIdsRoles().stream().map(
//				role -> {
//					return new Role(role);
//				}).collect(Collectors.toList());
//		
		User user = userExists.get();
		
		user.setRoles(roles);
		
		userRepository.save(user);
		
		return user;
	}

}
