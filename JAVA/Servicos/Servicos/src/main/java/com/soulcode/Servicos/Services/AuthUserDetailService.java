package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.User;
import com.soulcode.Servicos.Repositories.UserRepository;
import com.soulcode.Servicos.Security.AuthUserDetail;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthUserDetailService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;

    @Cacheable(value="authUserDetailServiceCache", key = "#username")
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional< User >user = userRepository.findByLogin(username);
        if (user.isEmpty()){ //ou use "!user.isPresent()"
            throw new UsernameNotFoundException("Usuário não encontrado");
        }

        return new AuthUserDetail(user.get().getLogin(), user.get().getPassword());
    }
}

//O propósito do UserdetailService é carregar de alguma fonte de dados o usuário e criar uma instância de AhtuUserDetail, conhecida pelo Spring.
