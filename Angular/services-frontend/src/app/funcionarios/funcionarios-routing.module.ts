import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificacaoTokenGuard } from '../guards/verificacao-token.guard';
import { IdValidatorGuard } from './guards/id-validator.guard';
import { PodeSairGuard } from './guards/pode-sair.guard';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { ListarFuncionariosComponent } from './pages/listar-funcionarios/listar-funcionarios.component';

const routes: Routes = [
  {
    //http://localhost:4200/funcionarios/..
    path: '',
    //pathMatch: 'full', quando não é colocado é caracterizado como prefix automaticamente
    component: ListarFuncionariosComponent,
    children:[
      {
        path:':idFuncionario',
        component: FuncionarioComponent,
        canDeactivate:[PodeSairGuard],
        canActivate:[IdValidatorGuard, VerificacaoTokenGuard]
      }
    ],
    canActivate:[ VerificacaoTokenGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
