import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'café soulcode';
  subtitle: string = 'CAFÉ PARA PROGRAMADORES'
  pessoa = {
    nome: 'Lucas',
    idade: 20,
    empregoAtual: 'Desempregado',
    estadoCivil: 'Solteiro'
    
  }
  data: Date = new Date()
  produtos = [
    {
      nome:'PlayStation 5',
      descricao: 'Video game muito caro',
      preco: 5500, 
      proprietarioDoPost: 'Vitor',
      foto:'',
      dataDeCriacao: new Date()

    }
  ]
}
