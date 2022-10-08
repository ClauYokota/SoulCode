import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  imagemSrc: string = ''

  @Input()
  produtoNome: string = ''

  @Input()
  produtoPreco: number = 0

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(){
  this.snackBar.open(`${this.produtoNome} comprado!`, 'OK',{
    duration: 5000,
    horizontalPosition: 'right',
    verticalPosition: 'top'
  })
}
  ngOnInit(): void {
  }

}
