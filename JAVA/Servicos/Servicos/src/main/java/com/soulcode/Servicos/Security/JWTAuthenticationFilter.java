package com.soulcode.Servicos.Security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.soulcode.Servicos.Models.User;
import com.soulcode.Servicos.Util.JWTUtils;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;

///login (POST)
//Essa classe entra em ação ao chamar -login
public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;
    private JWTUtils jwtUtils;

    public JWTAuthenticationFilter(AuthenticationManager manager, JWTUtils  jwtUtils){
        this.authenticationManager = manager;
        this.jwtUtils = jwtUtils;
    }


    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        //Tenta autenticar o usuário
        try{
            //{"login": "", "password":""}
            User user = new ObjectMapper().readValue(request.getInputStream(), User.class); //Extrair informações de user da request "bruta" (bruta =  pq não tem o Controller para refinar)
            return authenticationManager.authenticate( //chama a autentificação do spring
                    new UsernamePasswordAuthenticationToken(
                            user.getLogin(),  //chama o AuthUserDetail
                            user.getPassword(),
                            new ArrayList<>()
                    )
            );
        }catch(IOException io){
            //caso o json da requisição não bater com o User.class
            throw  new RuntimeException(io.getMessage());

        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        //gerar o token e devolver para o usuário que se autenticou com sucesso
        AuthUserDetail user = (AuthUserDetail) authResult.getPrincipal();
        String token = jwtUtils.generateToken(user.getUsername()); //gerou o token assinado com subject   ufhauhfushaufhaufhuashfuahfusahfushfushaufhaufahs.....

        response.setHeader("Access-Control-Allow-Origin", "*"); //permite que outras origens podem ter acesso a essa resposta como o Angular. Caso não haja, o Postman pode funcionar, mas o Angular não.
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        //{Authorization: "token"}
        response.getWriter().write("{\"Authorization\": \"" + token + "\"}"); //escreve no body
        response.getWriter().flush(); //termina a escrita
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response, AuthenticationException failed) throws IOException, ServletException {
        //customiza a resposta de erro do login que falhou
        response.setStatus(401); //não autorizado
        response.setContentType("application/json"); //mensagem de erro no body
        response.getWriter().append(json());  // = .write() + .flush()  //termina a escrita
    }
    String json(){ //formatar a mensagem de erro
        long date = new Date().getTime();
        return "{"
                + "\"timestamp\": "+ date + ","
                + "\"status\":401, "
                + "\"error\" : \"Nao autorizado\","
                + "\"message\" : \"Email/senha invalidos\","
                + "\"path\" : \"/login\""
                + "}";

    }
}

//FRONT manda {"login":"jr@mail.com", "password":"12345"}
//A partir do JSON -> User
//Tenta realizar autenticação
//Caso dê certo:
// - Gera o token JWT
// - Retorna o token para o FRONT