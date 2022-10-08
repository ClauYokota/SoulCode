import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormPodeSairComponent } from '../components/form-pode-sair/form-pode-sair.component';
import { FuncionarioComponent } from '../pages/funcionario/funcionario.component';

@Injectable({
  providedIn: 'root'
})
export class PodeSairGuard implements CanDeactivate<FuncionarioComponent> {

  constructor(
    private dialog: MatDialog
  ){}

  canDeactivate(
    component: FuncionarioComponent, //representa o componente que ele está inserido
    currentRoute: ActivatedRouteSnapshot, //a partir dele consseguimos acessar o valor dos parâmetros
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      //Se o guard retornar o valor TRUE, significa que a pessoa PODE sair da página
      //Se o guard retornar o valor FALSE, significa que a pessoa NÃO PODE sair da página
    
    //1º Pegar os dados do formulário e guardar cada um em variáveis diferentes
    const nome =  component.formFuncionario.value.nome
    const email = component.formFuncionario.value.email
    const foto = component.formFuncionario.value.foto

    if(nome != component.funcionario.nome || email!= component.funcionario.email || foto.length>0){
      const querSair = this.dialog.open(FormPodeSairComponent)
      return querSair.afterClosed()
    }else{
      return true
    } 
  }
}
