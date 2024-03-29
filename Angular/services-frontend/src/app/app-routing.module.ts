import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodeSairGuard } from './funcionarios/guards/pode-sair.guard';


const routes: Routes = [
  {
    path: 'funcionarios',
    loadChildren: () => import('./funcionarios/funcionarios.module').then(m => m.FuncionariosModule)
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo:'funcionarios'
  },
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
