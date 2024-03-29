import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { async } from '@firebase/util';
import { Observable } from 'rxjs';
import { Funcionario } from '../../models/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-form-funcionario',
  templateUrl: './form-funcionario.component.html',
  styleUrls: ['./form-funcionario.component.css']
})
export class FormFuncionarioComponent implements OnInit {
  
  formFuncionario: FormGroup = this.fb.group({
    nome:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    foto:['']
  })

  foto!:File
  fotoPreview: string = "/assets/imgvazio.jpeg"
  salvandoFuncionario: boolean = false

  constructor(
    private fb: FormBuilder,
    private funcService:FuncionarioService,
    private dialogRef: MatDialogRef<FormFuncionarioComponent>, //objeto que permite controlar o dialog aberto
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  recuperarFoto(event: any): void{
    this.foto = event.target.files[0]
    this.carregarPreview()
  }

  carregarPreview(): void{
    const reader = new FileReader()

    reader.readAsDataURL(this.foto)
    reader.onload = () => {
      this.fotoPreview = reader.result as string
    }
  }

  salvar():void{
    this.salvandoFuncionario = true // apenas para o mat-spinner funcionar
    const f: Funcionario = this.formFuncionario.value
    let obsSalvar: Observable<any> 

    if(this.formFuncionario.value.foto.length>0){
      obsSalvar = this.funcService.salvarFuncionario(f, this.foto)
    }else{
      obsSalvar = this.funcService.salvarFuncionario(f)
    }

    obsSalvar.subscribe(
      (resultado) => {
        //1º - testar se o resultado é uma Promise ou não
        if (resultado instanceof Promise){
          //Se cair no if, significa que há uma Promise e que tem uma foto para salvar
          //a função then() é executada quando a promise consegue te retornar os dados com sucesso
          //Nesse caso, o dado que será retornado é um observable com o funcionario que foi salvo no banco de dados
          resultado.then((obs$) => {
            //inscrevendo-se no observable que nos retornará o funcionário salvo no banco de dados
          
            obs$.subscribe(
              ()=>{
                this.snackBar.open(`Funcionário salvo com sucesso!`, 'OK',{duration: 3000, horizontalPosition: 'center', verticalPosition:'bottom'})
            this.dialogRef.close()
              }
            )
          })
        }else{
          //Se cair no else, significa que o funcionário já foi salvo e não tinha foto para enviar
          this.snackBar.open(`Funcionário salvo com sucesso!`, 'OK',{duration: 3000, horizontalPosition: 'center', verticalPosition:'bottom'})
            this.dialogRef.close()
        }
      }
    )

  } 
/* 
  {
    nome:'João'
    email:'joão@mail.com'
  } */


}
