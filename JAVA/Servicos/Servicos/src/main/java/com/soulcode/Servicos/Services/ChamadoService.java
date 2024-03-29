package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.Chamado;
import com.soulcode.Servicos.Models.Cliente;
import com.soulcode.Servicos.Models.Funcionario;
import com.soulcode.Servicos.Models.StatusChamado;
import com.soulcode.Servicos.Repositories.ChamadoRepository;
import com.soulcode.Servicos.Repositories.ClienteRepository;
import com.soulcode.Servicos.Repositories.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ChamadoService {
    @Autowired
    ChamadoRepository chamadoRepository;

    @Autowired
    ClienteRepository clienteRepository;

    @Autowired
    FuncionarioRepository funcionarioRepository;

    @Cacheable("chamadoCache")
    public List<Chamado>mostrarTodosChamados(){
        return chamadoRepository.findAll();
    }

    @Cacheable(value = "chamadoCache", key="#idChamado")
    public Chamado mostrarUmChamadoPeloId(Integer idChamado){
        Optional<Chamado>chamado = chamadoRepository.findById(idChamado);
        return chamado.orElseThrow();
    }

    @Cacheable(value = "chamadoCache", key = "#idCliente")
    public List<Chamado>buscarChamadosPeloCliente(Integer idCliente){
        Optional<Cliente>cliente = clienteRepository.findById(idCliente);
        return chamadoRepository.findByCliente(cliente);
    }

    @Cacheable(value = "chamadoCache", key = "#idFuncionario")
    public List<Chamado>buscarChamadosPeloFuncionario(Integer idFuncionario){
        Optional<Funcionario>funcionario = funcionarioRepository.findById(idFuncionario);
        return chamadoRepository.findByFuncionario(funcionario);
    }

    @Cacheable(value = "chamadoCache", key = "#status")
    public List<Chamado>buscarChamadosPeloStatus(String status){
        return chamadoRepository.findByStatus(status);
    }


    @Cacheable(value = "chamadoCache", key = "T(java.util.Objects).hash(#data1, #data2)")
    public List<Chamado>buscarPorIntervaloData(Date data1, Date data2){
        return chamadoRepository.findByIntervaloData(data1, data2);
    }


    //cadastrar um novo chamado
    //temos 3 regras:   1) no momento do cadastro do chamado, já devemos informar de qual cliente é
    //                  2) no momento do cadastro do chamado, a princípio vamos fazer esse cadastro sem estar atribuído a um funcionário
    //                  3) no momento do cadastro do chamado, o status desse chamado deve ser RECEBIDO

    @CachePut(value = "chamadoCache", key ="#idCliente")
    public Chamado cadastrarChamado(Chamado chamado, Integer idCliente){
        //regra 3 - atribuição do status recebido para o chamado que está sendo cadastrado
        chamado.setStatus(StatusChamado.RECEBIDO);

        //regra 2 - dizer que ainda não atribuimos esse chamado para nenhum funcionário
        chamado.setFuncionario(null);

        //regra 1 - buscando os dados do cliente, dono do chamado
        Optional<Cliente>cliente = clienteRepository.findById(idCliente);
        chamado.setCliente(cliente.get());
        return chamadoRepository.save(chamado);
    }

    @CacheEvict(value = "chamadoCache", key = "#idChamado", allEntries = true)
    public  void excluirChamado(Integer idChamado){

        chamadoRepository.deleteById(idChamado);
    }

    //No momento da edição de um chamado devemos preservar o cliente e o funcionário desse chamado
    //vamos editar os dados do chamado, mas continuamos com os dados do cliente e dos dados do funcionário

    @CachePut(value = "chamadoCache", key = "#idChamado")
    public Chamado editarChamado(Chamado chamado, Integer idChamado){
        //instanciamos aqui um objeto do tipo Chamado para guardar os dados do chamado sem as novas alterações
        Chamado chamadoSemASNovasAlteracoes = mostrarUmChamadoPeloId(idChamado);
        Funcionario funcionario = chamadoSemASNovasAlteracoes.getFuncionario();
        Cliente cliente = chamadoSemASNovasAlteracoes.getCliente();

        chamado.setCliente(cliente);
        chamado.setFuncionario(funcionario);

        return chamadoRepository.save(chamado);
    }

    //método para atribuir um funcionário para um determinado chamado ou trocar o funcionário de determinado chamado
    //- regra ->  no momento em que um determinado chamado é atribuído a um funcionário o status do chamado precisa ser alterado para ATRIBUÍDO
    @CachePut(value = "chamadoCache", key = "#idFuncionario")
    public Chamado atribuirFuncionario(Integer idChamado, Integer idFuncionario){
        //buscar dados do funcionário que vai ser atribuido a esse chamado
        Optional<Funcionario>funcionario = funcionarioRepository.findById((idFuncionario));
        //buscar o chamado para o qual vai ser especificado o funcionário escolhido
        Chamado chamado = mostrarUmChamadoPeloId(idChamado);
        chamado.setFuncionario(funcionario.get());
        chamado.setStatus(StatusChamado.ATRIBUIDO);

        return  chamadoRepository.save(chamado);
    }

    //método para modificar o status de um chamado
    @CachePut(value = "chamadoCache", key = "#idChamado")
    public Chamado modificarStatus(Integer idChamado, String status) {
        Chamado chamado = mostrarUmChamadoPeloId(idChamado);

        if (chamado.getFuncionario() != null) {
            switch (status) {
                case "ATRIBUIDO": {
                    chamado.setStatus(StatusChamado.ATRIBUIDO);
                    break;
                }
                case "CONCLUIDO": {
                    chamado.setStatus(StatusChamado.CONCLUIDO);
                    break;
                }
            }


            switch (status) {

                case "ARQUIVADO": {
                    chamado.setStatus(StatusChamado.ARQUIVADO);
                    break;
                }
                case "RECEBIDO": {
                    chamado.setStatus(StatusChamado.RECEBIDO);
                    break;
                }
            }
        }

        return chamadoRepository.save(chamado);
    }

    public List<List>quantidadeDeChamadosPeloStatus(){
        return chamadoRepository.quantidadeDeChamadosPeloStatus();
    }
}