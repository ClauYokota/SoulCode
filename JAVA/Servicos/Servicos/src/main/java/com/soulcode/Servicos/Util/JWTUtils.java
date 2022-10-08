package com.soulcode.Servicos.Util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JWTUtils { // Classe responsável por gerenciar e gerar token
    @Value("${jwt.secret}") //-> está em application.properties
    private String secret;

    @Value("${jwt.expiration}")
    private Long expiration; //Long = muito tempo -> 86400000 milisegundos = 1 dia

    public String generateToken(String email){
        return JWT.create()
                .withSubject(email) //email do usuário
                .withExpiresAt(new Date(System.currentTimeMillis()+expiration))
                .sign(Algorithm.HMAC512(secret));
    }

    public String getLogin(String token){
        return JWT.require(Algorithm.HMAC512(secret)).build().verify(token).getSubject();
        //Subject = email/login
    }
}
