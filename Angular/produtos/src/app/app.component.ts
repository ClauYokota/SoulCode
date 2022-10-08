import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductFormDialogComponent } from './components/product-form-dialog/product-form-dialog.component';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  produtos: Product[]=[]

  constructor(private dialog:MatDialog) {}

  openFormDialog(){
    const dialogX = this.dialog.open(ProductFormDialogComponent)
    dialogX.afterClosed().subscribe(
      value => {
        if (value){
          this.produtos.push(value)
        }
      }
    ) 
  }
}
