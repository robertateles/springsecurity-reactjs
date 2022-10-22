package com.auth.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth.entity.Contact;
import com.auth.repositories.ContactRepository;
import com.auth.service.ContactService;
import com.exception.ResourceNotFoundException;

@Service
public class ContactServiceImpl implements ContactService{

	@Autowired
	private ContactRepository contatoRepository;
	
	@Override
	@Transactional
	public Contact salvar(Contact contato) {
		return contatoRepository.save(contato);
	}

	@Override
	public List<Contact> getAllContatos() {
		return contatoRepository.findAll();
	}


	@Override
	public Contact getContatoById(long id) {
		
		return contatoRepository.findById(id).orElseThrow(() ->
		new ResourceNotFoundException("Contato", "id", id));
	}
}
