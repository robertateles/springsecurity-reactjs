package com.auth.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.auth.entity.Contact;
import com.auth.repositories.ContactRepository;
import com.auth.service.ContactService;
import com.auth.service.impl.ContactServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping("api/contato")
public class ContactController {

	@Autowired
	private ContactRepository repository;
	
	@Autowired
	private ContactServiceImpl service;
	
	@Autowired
	private ContactService contatoService;
	
	@PostMapping
	public ResponseEntity salvar(@RequestBody Contact contato) {
		return new ResponseEntity<Contact>(service.salvar(contato), HttpStatus.CREATED);
	}
	
	@GetMapping
	public ResponseEntity<List<Contact>> findAll(){
		List<Contact> contatos = service.getAllContatos();
		return ResponseEntity.ok().body(contatos);
	}
		
	@GetMapping("{id}")
	public ResponseEntity<Contact> getContatoById(@PathVariable("id") long ContatoId){
		return new ResponseEntity<Contact>(service.getContatoById(ContatoId), HttpStatus.OK);
	}
}
