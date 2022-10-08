package com.soulcode.Servicos.Repositories;

import com.soulcode.Servicos.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    public Optional<User> findByLogin(String login);//irá buscar pelo email do user
}
