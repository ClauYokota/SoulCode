import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  @Input()
  titulo:string = 'Título'

  @Input()
  conteudo:string = 'Conteúdo'
  constructor() { }

  ngOnInit(): void {
  }

}
