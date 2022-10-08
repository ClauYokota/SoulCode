package com.soulcode.Servicos.Config;

import com.soulcode.Servicos.Security.JWTAuthenticationFilter;
import com.soulcode.Servicos.Security.JWTAuthorizationFilter;
import com.soulcode.Servicos.Services.AuthUserDetailService;
import com.soulcode.Servicos.Util.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

//Agrega todas as informações de segurança http e gerência do user
@EnableWebSecurity
public class JWTConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JWTUtils jwtUtils;

    @Autowired
    private AuthUserDetailService userDetailService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        //userDetailsService -> carrega o usuário do banco
        //BCrypt -> gerador de hash de senhas
        auth.userDetailsService(userDetailService).passwordEncoder(passwordEncoder()); //Usa passwordEncouter() para comparar senhas de login

    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        //habilita o cors e desabilita o csrf
        http.cors().and().csrf().disable(); //unifica as portas do angular e do database
        http.addFilter(new JWTAuthenticationFilter(authenticationManager(), jwtUtils)); //1º filtro - JWTAuthentication é chamado quando uso /login
        http.addFilter(new JWTAuthorizationFilter(authenticationManager(), jwtUtils)); //2º filtro
        http.authorizeRequests() //autoriza requisições
                .antMatchers(HttpMethod.POST, "/login").permitAll()
                // .antMatchers(HttpMethod.GET, "/servicos/**").permitAll() //libera GET para /servicos/alguma coisa :P  ** = qualquer possibilidade
                .anyRequest().authenticated();

        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS); //não armazena informação de token, não salva os dados do usuário
    }


    @Bean
    public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean //CROSS ORIGIN RESOURCE SHARING
    CorsConfigurationSource corsConfigurationSource() { //configuração global de CORS
        CorsConfiguration configuration = new CorsConfiguration(); //configurações padrões
        configuration.setAllowedMethods(List.of( //quais métodos estão liberados via CORS?
                HttpMethod.GET.name(),
                HttpMethod.PUT.name(),
                HttpMethod.POST.name(),
                HttpMethod.DELETE.name()
        )); //métodos permitidos para o front acessar
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        // endpoints permitidos para o front acessar
        source.registerCorsConfiguration("/**", configuration.applyPermitDefaultValues()); // "/servicos/funcionarios" -> "/**" = todos os endpoints estão liberados para os métodos acima
        return source;
    }
}
