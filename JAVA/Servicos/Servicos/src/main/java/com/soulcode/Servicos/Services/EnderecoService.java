package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.Cliente;
import com.soulcode.Servicos.Models.Endereco;
import com.soulcode.Servicos.Repositories.ClienteRepository;
import com.soulcode.Servicos.Repositories.EnderecoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;
import java.util.Optional;

@Service
public class EnderecoService {

    @Autowired
    EnderecoRepository enderecoRepository;

    @Autowired
    ClienteRepository clienteRepository;

    @Cacheable("enderecoCache")
    public List<Endereco>mostrarTodosEnderecos(){
        return enderecoRepository.findAll();
    }

    @Cacheable(value = "enderecoCache", key = "#idEndereco")
    public Endereco mostrarUmEnderecoPeloId (Integer idEndereco){
        Optional<Endereco>endereco = enderecoRepository.findById(idEndereco);
        return endereco.orElseThrow();
    }

    //CADASTRO DE UM NOVO ENDEREÇO
    //1º REGRA - para cadastrar um endereço, o cliente já deve estar cadastrado no database;
    //2º REGRA - no momento do cadastro do endereço precisamos passar o id do cliente que é dono desse endereço;
    //3º REGRA - o id do endereço vai ser o mesmo id do cliente;

    @CachePut(value = "enderecoCache", key = "#idCliente")
    public Endereco cadastrarEnderecoDoCliente(Endereco endereco, Integer idCliente) throws Exception{
        //estamos declarando um optional de cliente e atribuindo para este os dados do cliente que receberá o novo endereço
        Optional<Cliente> cliente = clienteRepository.findById(idCliente);
        if (cliente.isPresent()) {
            endereco.setIdEndereco(idCliente);
            enderecoRepository.save(endereco);

            cliente.get().setEndereco(endereco);
            clienteRepository.save(cliente.get());
            return endereco;
        }else{
            throw new Exception();
        }

    }

    @CachePut(value = "enderecoCache", key = "#endereco.idEndereco")
    public Endereco editarUmEndereco(Endereco endereco){
      return enderecoRepository.save(endereco);
    }



}
