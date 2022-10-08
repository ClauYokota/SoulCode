package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.Cargo;
import com.soulcode.Servicos.Models.Funcionario;
import com.soulcode.Servicos.Repositories.CargoRepository;
import com.soulcode.Servicos.Repositories.FuncionarioRepository;
import com.soulcode.Servicos.Services.Exceptions.DataIntegrityViolationException;
import com.soulcode.Servicos.Services.Exceptions.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

//quando se fala em serviços, estamos falando dos métodos do crud da tabela

@Service
public class FuncionarioService {

    //aqui se faz a injeção de dependência
    @Autowired
    FuncionarioRepository funcionarioRepository;
    //primeiro serviço na tabela de funcionários vai ser a leitura de todos os funcionários cadastrados
    //findAll -> método do Spring Data JPA -> busca todos os registros de uma tabela
    @Autowired
    CargoRepository cargoRepository;
    public List<Funcionario> mostrarTodosFuncionarios(){
        return funcionarioRepository.findAll();
    }


    //vamos criar mais unm serviço relacionado ao funcionário
    //criar um serviço buscar apenas um funcionário pelo seu id (chave primária)
    public Funcionario mostarUmFuncionarioPeloId(Integer idFuncionario){
        Optional<Funcionario> funcionario = funcionarioRepository.findById(idFuncionario);
        return funcionario.orElseThrow(
                ()-> new EntityNotFoundException("Não há nenhum funcionário cadastrado no id "+idFuncionario)
        );
    }

    //vamos criar mais um serviço para buscar um funcionário pelo seu email
    public Funcionario mostrarUmFuncionarioPeloEmail(String email){
        Optional<Funcionario> funcionario = funcionarioRepository.findByEmail(email);
        return funcionario.orElseThrow();
    }

    //vamos criar um serviço para cadastrar um novo funcionario
    public Funcionario cadastrarFuncionario(Funcionario funcionario, Integer idCargo){
        //só por precaução vamos colocar o id do funcionário como nulo
        try {
            funcionario.setIdFuncionario(null);

            Optional<Cargo> cargo = cargoRepository.findById(idCargo);
            funcionario.setCargo(cargo.get());
            return funcionarioRepository.save(funcionario);
        }catch (Exception e) {
        throw new DataIntegrityViolationException("Erro ao cadastrar funcionário");
        }
    }

    public void excluirFuncionario(Integer idFuncionario){
        funcionarioRepository.deleteById(idFuncionario);
    }

    public Funcionario editarUmFuncionario(Funcionario funcionario){
       return funcionarioRepository.save(funcionario);
    }

    public Funcionario salvarFoto(Integer idFuncionario, String caminhoFoto){
        Funcionario funcionario = mostarUmFuncionarioPeloId(idFuncionario);
        funcionario.setFoto(caminhoFoto);
        return funcionarioRepository.save(funcionario);
    }

    public Funcionario atribuirCargo(Integer idFuncionario, Integer idCargo){
        Optional<Cargo>cargo = cargoRepository.findById(idCargo);
        Funcionario funcionario = mostarUmFuncionarioPeloId (idFuncionario);
        funcionario.setCargo(cargo.get());
        return funcionarioRepository.save(funcionario);
    }

    public List<Funcionario>mostrarTodosFuncionariosDeUmCargo(Integer idCargo){
        Optional<Cargo>cargo = cargoRepository.findById(idCargo);
        return funcionarioRepository.findByCargo(cargo);
    }

    public List<Funcionario> buscarFuncionarioSemChamado (){
       return funcionarioRepository.buscarFuncionariosSemChamado();
    }

    public List<List>qntFuncionariosPeloCargo(){
        return  funcionarioRepository.qntFuncionariosPeloCargo();
    }

}
