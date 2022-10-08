package com.soulcode.Servicos.Controllers;

import com.soulcode.Servicos.Models.Funcionario;
import com.soulcode.Servicos.Services.FuncionarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin  //aplicações que estão rodando em portas diferentes podem passar por aqui e acessar
@RestController //API do tipo rest
@RequestMapping("servicos") //todos os endpoints vão começar com serviços
public class FuncionarioController {
    //criação da camada de endpoint da aplicação

    @Autowired
    FuncionarioService funcionarioService;

    @GetMapping("/funcionarios")
    public List<Funcionario> mostrarTodosFuncionarios(){
        List<Funcionario>funcionarios = funcionarioService.mostrarTodosFuncionarios();
        return funcionarios;
    }

    @GetMapping("/funcionarios/{idFuncionario}")
    public ResponseEntity <Funcionario>mostrarUmFuncionarioPeloId(@PathVariable Integer idFuncionario){
        Funcionario funcionario = funcionarioService.mostarUmFuncionarioPeloId(idFuncionario);
        return ResponseEntity.ok().body(funcionario);
    }

    @GetMapping("/funcionariosEmail/{email}")
    public ResponseEntity<Funcionario>mostrarUmFuncionarioPeloEmail(@PathVariable String email){
        Funcionario funcionario= funcionarioService.mostrarUmFuncionarioPeloEmail(email);
        return ResponseEntity.ok().body(funcionario);
    }

    @PostMapping("/funcionarios/{idCargo}")
    public ResponseEntity<Funcionario> cadastrarFuncionario(@PathVariable Integer idCargo, @RequestBody Funcionario funcionario){
        //nessa linha o funcionário já é salvo na tabela do database
        //agora é preciso criar uma URI para esse novo registro da tabela
        funcionario = funcionarioService.cadastrarFuncionario(funcionario, idCargo);
        URI novaUri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(funcionario.getIdFuncionario()).toUri();
        return ResponseEntity.created(novaUri).body(funcionario);
    }

    @DeleteMapping("/funcionarios/{idFuncionario}")
    public ResponseEntity<Void> excluirFuncionario(@PathVariable Integer idFuncionario){
        funcionarioService.excluirFuncionario(idFuncionario);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/funcionarios/{idFuncionario}")
    public ResponseEntity<Funcionario>editarFuncionario(@PathVariable Integer idFuncionario, @RequestBody Funcionario funcionario){
        funcionario.setIdFuncionario((idFuncionario));
        funcionarioService.editarUmFuncionario(funcionario);
        return ResponseEntity.ok().body(funcionario);
    }

    @PutMapping("/funcionariosAtribuirCargo/{idFuncionario}/{idCargo}")
    public ResponseEntity<Funcionario>atribuirCargo(@PathVariable Integer idFuncionario, @PathVariable Integer idCargo){
        funcionarioService.atribuirCargo(idFuncionario, idCargo);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("funcionariosDoCargo/{idCargo}")
    public List<Funcionario>mostrarTodosFuncionariosDeUmCargo(@PathVariable Integer idCargo){
        List<Funcionario>funcionarios = funcionarioService.mostrarTodosFuncionariosDeUmCargo(idCargo);
        return funcionarios;
    }

    @GetMapping("/funcionariosSemChamado")
    public List<Funcionario>buscarFuncionarioSemChamado() {
        List<Funcionario> funcionarios = funcionarioService.buscarFuncionarioSemChamado();
        return funcionarios;
    }

    @GetMapping("/qntFuncionariosPeloCargo")
    public  List<List>qntFuncionariosPeloCargo(){
        List<List>funcionario = funcionarioService.qntFuncionariosPeloCargo();
        return funcionario;
    }
}
