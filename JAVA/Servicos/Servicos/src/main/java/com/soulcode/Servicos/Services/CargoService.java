package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.Cargo;
import com.soulcode.Servicos.Repositories.CargoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CargoService {

    @Autowired
    CargoRepository cargoRepository;

    @Cacheable("cargoCache")
    public List<Cargo>mostrarTodosCargos(){
        return cargoRepository.findAll();
    }

    @Cacheable(value = "cargoCache", key = "#idCargo")
    public Cargo mostrarCargoPeloId(Integer idCargo){
        Optional<Cargo>cargo = cargoRepository.findById(idCargo);
        return cargo.orElseThrow();
    }

    @CachePut (value = "cargoCache", key = "#cargo.idCargo")
    public Cargo cadastrarCargo(Cargo cargo){
        cargo.setIdCargo(null); //null para limpar o id e evitar possível erro, por precaução
        return  cargoRepository.save(cargo);
    }
    @CacheEvict(value = "cargoCache", key = "#idCargo", allEntries = true)
    public void excluirCargo(Integer idCargo){
        cargoRepository.deleteById(idCargo);
    }

    @CachePut(value = "cargoCache", key = "#cargo.idCargo")
    public Cargo  editarUmCargo(Cargo cargo){
         return cargoRepository.save(cargo);

    }


}
