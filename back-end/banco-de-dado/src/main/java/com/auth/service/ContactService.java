package com.auth.service;

import java.util.List;

import com.auth.entity.Contact;

public interface ContactService {

	  Contact salvar(Contact contato);
	  
	  List<Contact> getAllContatos();
	  
	  Contact getContatoById(long id);
}
