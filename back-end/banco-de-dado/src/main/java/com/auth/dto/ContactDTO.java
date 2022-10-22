package com.auth.dto;

import java.util.UUID;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ContactDTO {

	private UUID nome;
	
	private String email;
	
	private String texto;
}
