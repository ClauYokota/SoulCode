package com.soulcode.Servicos.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Cargo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCargo;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(nullable = false, length = 100)
    private String descricao;

    @Column(nullable = false, length = 10)
    private double salario;

//    @JsonIgnore
//    @OneToMany(mappedBy = "cargo" )
//    private List<Funcionario>funcionarios = new ArrayList<>();

    //Relacionamento unidirecional apenas coloca o relacionamento em uma das tabelas e não nas duas
    //Nesse caso coloca o relacionamento apenas nos funcionários

    public Integer getIdCargo() {
        return idCargo;
    }

    public void setIdCargo(Integer idCargo) {
        this.idCargo = idCargo;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

//    public List<Funcionario> getFuncionarios() {
//        return funcionarios;
//    }
//
//    public void setFuncionarios(List<Funcionario> funcionarios) {
//        this.funcionarios = funcionarios;
//    }
}
