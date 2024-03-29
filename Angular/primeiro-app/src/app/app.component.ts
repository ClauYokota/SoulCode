import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* title = 'Contador';
  count = 0;
  counter(type:string){

    type==='aumentar'? this.count++:this.count--
  }*/
  contador: number = 0
  simbolos: string[] = ['+','-']

  incrementar():void{
    this.contador++
  }
  decrementar():void{
    this.contador--
  }

  adicionarValor(evento:any):void{
    if(evento.target.value.length ==0){
      this.contador=0
    }else{
    this.contador = parseInt(evento.target.value)
    }
  }
}



