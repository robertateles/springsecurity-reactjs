package com.auth.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.entity.User;
import com.auth.service.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping("/user")
public class UserController {

	@Autowired
	UserService userService;
	
	@PostMapping("/create")
	public User save(@RequestBody User user) {
		return userService.save(user);
	}
	
	@GetMapping
	public ResponseEntity<List<User>> findAll(){
		List<User> user = userService.getAllUsers();
		return ResponseEntity.ok().body(user);
	}
	
	@GetMapping("{id}")
	public ResponseEntity<User> getUserById(@PathVariable("id") long UserId){
		return new ResponseEntity<User>(userService.getUserById(UserId),HttpStatus.OK);
	}
	
	@PutMapping("{id}")
	public ResponseEntity atualizar(@PathVariable Long id, @RequestBody User u) {
		return new ResponseEntity<User>(userService.atualizar(u, 1),HttpStatus.BAD_REQUEST);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity deletar(@PathVariable("id") Long id) {
		return userService.buscarPorId(id).map(entity ->{
			userService.deletar(entity);
			return new ResponseEntity(HttpStatus.NO_CONTENT);
		}).orElseGet(() -> new ResponseEntity("Usuário não encontrado",HttpStatus.BAD_REQUEST));
	}
}
