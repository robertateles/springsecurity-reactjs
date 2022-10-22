package com.auth.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EntityScan(basePackages = {"com.auth.entity"})
@EnableJpaRepositories(basePackages = {"com.auth.repositories"})
@ComponentScan(basePackages = {"com.auth.controller", "com.auth.service", "com.auth.service.impl", "com.auth.security"})
@SpringBootApplication
public class BancoDeDadoApplication {

	public static void main(String[] args) {
		SpringApplication.run(BancoDeDadoApplication.class, args);
	}

}
