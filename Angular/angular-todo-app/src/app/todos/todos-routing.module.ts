import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcessTodosGuard } from '../guards/acess-todos.guard';
import { TodosComponent } from './pages/todos/todos.component';

const routes: Routes = [
  {
    path:'',
    component: TodosComponent,
    canActivate: [
      AcessTodosGuard
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
