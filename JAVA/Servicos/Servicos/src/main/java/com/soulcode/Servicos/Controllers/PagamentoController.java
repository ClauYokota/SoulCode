package com.soulcode.Servicos.Controllers;

import com.soulcode.Servicos.Models.Pagamento;
import com.soulcode.Servicos.Services.PagamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("servicos")
public class PagamentoController {
    @Autowired
    PagamentoService pagamentoService;

    @GetMapping("/pagamentos")
    public List<Pagamento>mostrarTodosPagamentos(){
//        List<Pagamento>pagamentos = pagamentoService.mostrarTodosPagamentos();
//        return pagamentos;

        return pagamentoService.mostrarTodosPagamentos();
    }

    @GetMapping("/pagamentos/{idPagamento}")
    public ResponseEntity <Pagamento> mostrarUmPagamentoPeloId(@PathVariable Integer idPagamento){
        Pagamento pagamento = pagamentoService.mostrarUmPagamentoPeloId(idPagamento);
        return ResponseEntity.ok().body(pagamento);
    }

    @GetMapping("/pagamentosPeloStatus")
    public List<Pagamento>buscarPagamentoPeloStatus(@RequestParam("status")String status){
        List<Pagamento>pagamentos = pagamentoService.buscarPagamentoPeloStatus(status);
        return pagamentos;
    }

    @PostMapping("/pagamentos/{idChamado}")
    public ResponseEntity cadastrarPagamentoDoChamado(@PathVariable Integer idChamado, @RequestBody Pagamento pagamento){
        try{
            pagamento = pagamentoService.cadastrarPagamentoDoChamado(pagamento, idChamado);
            URI novaUri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(pagamento.getIdPagamento()).toUri();
            return ResponseEntity.created(novaUri).body(pagamento);
        }catch (Exception e){
            return  ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/pagamentos/{idPagamento}")
    public ResponseEntity<Pagamento>editarUmPagamento(@PathVariable Integer idPagamento, @RequestBody Pagamento pagamento){
        pagamento.setIdPagamento(idPagamento);
        pagamentoService.editarUmPagamento(pagamento);
        return ResponseEntity.ok().body(pagamento);
    }

    @PutMapping("/pagamentosModificarStatus/{idPagamento}")
    public ResponseEntity<Pagamento>modificarStatus(@PathVariable Integer idPagamento, @RequestParam("status") String status){
        pagamentoService.modificarStatus(idPagamento, status);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/pagamentosChamadosComCliente")
    public List<List> orcamentoComServicoCliente() {
        List<List> pagamentos = pagamentoService.orcamentoComServicoCliente();
        return pagamentos;
    }

    @GetMapping("/qntPagamentosStatus")
    public List<List>quantidadeDePagamentosPeloStatus(){
        List<List>pagamentos = pagamentoService.quantidadeDePagamentosPeloStatus();
        return pagamentos;
    }


}
