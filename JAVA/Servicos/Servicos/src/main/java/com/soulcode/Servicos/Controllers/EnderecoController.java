package com.soulcode.Servicos.Controllers;

import com.soulcode.Servicos.Models.Endereco;
import com.soulcode.Servicos.Services.EnderecoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("servicos")
public class EnderecoController {

    @Autowired
    EnderecoService enderecoService;

    @GetMapping("/enderecos")
    public List<Endereco>mostrarTodosEnderecos(){
        List<Endereco>enderecos = enderecoService.mostrarTodosEnderecos();
        return enderecos;
    }

    @GetMapping("/enderecos/{idEndereco}")
    public ResponseEntity <Endereco> mostrarUmEnderecoPeloId(@PathVariable Integer idEndereco){
        Endereco endereco = enderecoService.mostrarUmEnderecoPeloId(idEndereco);
        return ResponseEntity.ok().body(endereco);
    }

    @PostMapping("/enderecos/{idCliente}")
    public ResponseEntity CadastrarEnderecoDoCliente(@PathVariable Integer idCliente, @RequestBody Endereco endereco){
        try{
            endereco = enderecoService.cadastrarEnderecoDoCliente(endereco, idCliente);
            URI novaUri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(endereco.getIdEndereco()).toUri();
            return ResponseEntity.created(novaUri).body(endereco);
        }catch (Exception e){
            return ResponseEntity.badRequest().build();
        }

    }

    @PutMapping("/enderecos/{idEndereco}")
    public ResponseEntity<Endereco>editarUmEndereco(@PathVariable Integer idEndereco, @RequestBody Endereco endereco){
        endereco.setIdEndereco(idEndereco);
        enderecoService.editarUmEndereco(endereco);
        return ResponseEntity.ok().body(endereco);
    }













}
