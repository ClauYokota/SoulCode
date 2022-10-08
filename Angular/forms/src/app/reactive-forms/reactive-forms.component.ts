import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  /* controlNome: FormControl = new FormControl('') */
 /*  formUsuario:FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required, Validators.maxLength(12)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8)]),
    genero: new FormControl('', [Validators.required]),
    termos: new FormControl(true, [Validators.requiredTrue])
  }) */
  // requiredTrue [e utilizado para validar se o campo esta marcado ouo n]
  
/*   formUsuario: FormGroup = this.fb.group({
    nome:this.fb.control('', [Validators.required]),
    username:this.fb.control('', [Validators.required, Validators.maxLength(12)]),
    email:this.fb.control('', [Validators.email, Validators.required]),
    senha:this.fb.control('', [Validators.required, Validators.minLength(8)]), 
    genero:this.fb.control('', [Validators.required]), 
    termos:this.fb.control(true, [Validators.requiredTrue])

  }) */

  formUsuario: FormGroup = this.fb.group({
    nome:['', [Validators.required]],
    username:['', [Validators.required, Validators.maxLength(12)]],
    email:['', [Validators.email, Validators.required]],
    senha:['', [Validators.required, Validators.minLength(8)]], 
    genero:['', [Validators.required]], 
    termos:[true, [Validators.requiredTrue]],
    telefones: this.fb.array([
      this.fb.control('', [Validators.required]), // = ['']
      this.fb.control('', [Validators.required])
     ])
    //FormArray só funciona dentro de um FormGroup
  })

  tels: FormArray = this.formUsuario.get('telefones') as FormArray

  constructor(
    private fb: FormBuilder 
  ) { }

  ngOnInit(): void {
  }

  enviar():void {
    console.log(this.formUsuario.value) //retorna apenas os valores digitados nos campos
    console.log(this.formUsuario.controls) //retorna todos os dados dos campos
  }

  adicionarCampoTelefone(): void{
    this.tels.controls.push(this.fb.control('', [Validators.required]))
  }

  removerCampoTelefone(): void{
    this.tels.controls.pop()
  }

}
