import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comunicacao-entre-componentes';
  estiloDoCartao: string = 'display: block;'
  texto:string = ''
  
  @ViewChild('para') //lê o elemento html 
  pOlaMundo!: ElementRef<HTMLParagraphElement>//! n precisa dar valor a variável 

  ngAfterViewInit(){
    setTimeout(()=>{
      this.pOlaMundo.nativeElement.innerText = `JoJo's Bizarre Adventure é muito bom!`}, 6000)
  }


  deletarCartao1(evento:any): void{
    console.log(evento)
    this.estiloDoCartao = 'display: none;'
  }

  mudarTexto(valor: string):void{
    this.texto = valor
  }

}
