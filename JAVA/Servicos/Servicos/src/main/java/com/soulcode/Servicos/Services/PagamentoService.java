package com.soulcode.Servicos.Services;

import com.soulcode.Servicos.Models.Chamado;
import com.soulcode.Servicos.Models.Pagamento;
import com.soulcode.Servicos.Models.StatusPagamento;
import com.soulcode.Servicos.Repositories.ChamadoRepository;
import com.soulcode.Servicos.Repositories.PagamentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class PagamentoService {
    @Autowired
    PagamentoRepository pagamentoRepository;

    @Autowired
    ChamadoRepository chamadoRepository;

    @Cacheable("pagamentoCache")
    public List<Pagamento>mostrarTodosPagamentos(){
        return pagamentoRepository.findAll();
    }

    @Cacheable(value = "pagamentoCache", key = "#idPagamento")
    public Pagamento mostrarUmPagamentoPeloId(Integer idPagamento){
        Optional<Pagamento>pagamento = pagamentoRepository.findById(idPagamento);
        return pagamento.orElseThrow();
    }

    @Cacheable(value = "pagamentoCache", key = "#status")
    public List<Pagamento>buscarPagamentoPeloStatus(String status){
        return pagamentoRepository.findByStatus(status);
    }

    @CachePut(value = "pagamentoCache", key = "#idChamado")
    public Pagamento cadastrarPagamentoDoChamado(Pagamento pagamento, Integer idChamado) throws Exception{

        Optional<Chamado>chamado = chamadoRepository.findById(idChamado);
        if (chamado.isPresent()){
            pagamento.setIdPagamento(idChamado);
            pagamentoRepository.save(pagamento);
            pagamento.setStatus(StatusPagamento.LANCADO);
            chamado.get().setPagamento(pagamento);
            chamadoRepository.save(chamado.get());
            return pagamento;
        }else{
            throw new Exception();
        }
    }

    @CachePut(value = "pagamentoCache", key="#pagamento.idPagamento")
    public Pagamento editarUmPagamento(Pagamento pagamento){

        return pagamentoRepository.save(pagamento);
    }

    @CachePut(value = "pagamentoCache", key = "#idPagamento")
    public Pagamento modificarStatus(Integer idPagamento, String status){
        Pagamento pagamento = mostrarUmPagamentoPeloId(idPagamento);

        switch (status){
            case "LANCADO":{
                pagamento.setStatus(StatusPagamento.LANCADO);
                break;
            }
            case "QUITADO":{
                pagamento.setStatus(StatusPagamento.QUITADO);
                break;
            }
        }
        return pagamentoRepository.save(pagamento);
    }

    public List<List> orcamentoComServicoCliente() {
        return Collections.singletonList(pagamentoRepository.orcamentoComServicoCliente());
    }

    public List<List> quantidadeDePagamentosPeloStatus (){
        return pagamentoRepository.quantidadeDePagamentosPeloStatus();
    }


}
