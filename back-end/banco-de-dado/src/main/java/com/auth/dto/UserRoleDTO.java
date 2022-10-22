package com.auth.dto;

import java.util.List;

import lombok.Data;

@Data
public class UserRoleDTO {

	private Long idUser;
	
	private List<Long> idsRoles;
	
}