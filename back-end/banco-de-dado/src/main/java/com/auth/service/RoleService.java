package com.auth.service;

import com.auth.dto.UserRoleDTO;
import com.auth.entity.User;

public interface RoleService {

	User execute(UserRoleDTO userRoleDTO); 

}
