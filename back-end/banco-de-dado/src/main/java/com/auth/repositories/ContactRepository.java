package com.auth.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.auth.entity.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long>{

}
