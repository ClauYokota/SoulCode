package com.soulcode.Servicos.Repositories;


import com.soulcode.Servicos.Models.Cargo;
import com.soulcode.Servicos.Models.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface FuncionarioRepository extends JpaRepository <Funcionario, Integer> {

    Optional<Funcionario> findByEmail(String email);
    //Optional <Funcionario> findByNome
    //Optional<Funcionario> findByNomeAndEmail(String nome, String email);

    List<Funcionario> findByCargo(Optional<Cargo>cargo);

    @Query(value = "SELECT \n" +
            "    *\n" +
            "FROM\n" +
            "    funcionario\n" +
            "WHERE\n" +
            "    (SELECT \n" +
            "            COUNT(*)\n" +
            "        FROM\n" +
            "            chamado\n" +
            "        WHERE\n" +
            "            id_funcionario = funcionario.id_funcionario) = 0", nativeQuery = true)
    List<Funcionario>buscarFuncionariosSemChamado();

    @Query(value = "SELECT \tfuncionario.id_cargo,COUNT(id_cargo) FROM funcionario GROUP BY funcionario.id_cargo;", nativeQuery = true)
    List<List>qntFuncionariosPeloCargo();

}
