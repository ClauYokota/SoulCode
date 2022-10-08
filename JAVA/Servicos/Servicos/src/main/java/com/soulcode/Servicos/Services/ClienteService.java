package com.soulcode.Servicos.Services;


import com.soulcode.Servicos.Models.Cliente;
import com.soulcode.Servicos.Repositories.ClienteRepository;
import com.soulcode.Servicos.Services.Exceptions.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    @Autowired
    ClienteRepository clienteRepository;

    @Cacheable("clienteCache") //só chama o return se o cache expirar -> ele vai no Redis e não diretamente do repository
    public List<Cliente>mostrarTodosClientes(){return clienteRepository.findAll();}

    @Cacheable(value = "clienteCache", key = "#idCliente") //clienteCache ::1
    public Cliente mostrarUmClientePeloId(Integer idCliente){
        Optional<Cliente>cliente = clienteRepository.findById(idCliente);
        return cliente.orElseThrow(
                ()-> new EntityNotFoundException("Não há nenhum cliente cadastrado no id "+idCliente)
        );
    }

    public Cliente mostrarUmClientePeloEmail(String emailCliente){
        Optional<Cliente>cliente = clienteRepository.findByEmail(emailCliente);
        return  cliente.orElseThrow();
    }

    @CachePut (value = "clienteCache", key = "#cliente.idCliente")
    public Cliente cadastrarCliente(Cliente cliente){
        cliente.setIdCliente(null);
        return clienteRepository.save(cliente);
    }

    @CacheEvict(value = "clienteCache", key = "#idCliente", allEntries = true)
    public void excluirCliente(Integer idCliente){
        clienteRepository.deleteById(idCliente);
    }

    //editar um cliente já cadastrado -> atualiza a informação no cache de acordo com a key
    @CachePut(value = "clienteCache", key = "#cliente.idCliente")
    public Cliente editarUmCliente(Cliente cliente){
        return clienteRepository.save(cliente);
    }
}
