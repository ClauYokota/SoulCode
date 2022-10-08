import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { ListarFuncionariosComponent } from './pages/listar-funcionarios/listar-funcionarios.component';
import { MaterialModule } from '../material/material.module';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { AddFuncionarioComponent } from './pages/add-funcionario/add-funcionario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormFuncionarioComponent } from './components/form-funcionario/form-funcionario.component';
import { FormDeleteComponent } from './components/form-delete/form-delete.component';
import { FormPodeSairComponent } from './components/form-pode-sair/form-pode-sair.component';
import { NavbarComponent } from '../components/navbar/navbar.component';




@NgModule({
  declarations: [
    ListarFuncionariosComponent,
    FuncionarioComponent,
    AddFuncionarioComponent,
    FormFuncionarioComponent,
    FormDeleteComponent,
    FormPodeSairComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FuncionariosModule { }
