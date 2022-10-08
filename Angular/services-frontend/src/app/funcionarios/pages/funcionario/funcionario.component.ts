import { HttpErrorResponse } from '@angular/common/http';
import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { FormDeleteComponent } from '../../components/form-delete/form-delete.component';
import { Funcionario } from '../../models/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})
export class FuncionarioComponent implements OnInit {

  funcionario!: Funcionario

  formFuncionario: FormGroup = this.fb.group({
    nome:['', [Validators.required]],
    email:['',[Validators.required, Validators.email]],
    foto:['']
  })

  imagePreview: string = ''
  foto!: File
  desabilitar: boolean = true
  naoEncontrado: boolean = false

  constructor(
    private route: ActivatedRoute, //acessa os parâmetros da rota ativa
    private funcService: FuncionarioService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    //let idFunc = this.route.snapshot.paramMap.get('idFuncionario')

    this.route.paramMap.subscribe(
      (params)=>{
        let idFuncionario = parseInt(params.get('idFuncionario')?? '0') //se o valor da esquerda for undefined ou nulo ele usa o valor da direita,==0, caso contrário ele pega o valor a esquerda
        this.recuperarFuncionario(idFuncionario)
      }
    )
  }

  recuperarFuncionario(id:number):void{
    this.funcService.getFuncionarioById(id).subscribe(
      func => {
        this.funcionario = func //1º pega o funcionário que foi retornado e coloca dentro da propriedade funcionário
        
        //2º pega os dados do funcionário e atribui esses valores aos seus respectivos campos no formulário
        //setValue() é responsável por pegar os valores que foram passados para ela e colocar dentro dos FormControls
        this.formFuncionario.setValue({
          nome:this.funcionario.nome,
          email: this.funcionario.email,
          foto:''
        })
        this.imagePreview = this.funcionario.foto //3º carrega o preview da imagem
        this.valorMudou()
      },
      (erro: HttpErrorResponse)=>{
        if(erro.status == 404){
          this.naoEncontrado = erro.status == 404
        }
      }
    )
  }
  
  recuperarFoto(event:any): void{
    this.foto = event.target.files[0]
    const reader = new FileReader() //objeto do js que faz a leitura de arquivos
    reader.readAsDataURL(this.foto) //ler o arquivo e gerar um link local para o acesso do conteúdo daquele arquivo
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }
  }

  valorMudou(){
    //valueChanges é um apropriedade dos FormGroups que é um observable que quando um valor do seu formulário altera, esse observable te retorna essa modificação
    this.formFuncionario.valueChanges.subscribe(
      (valores) => { //o parâmetro valores é um objeto que é retornado te informando o valor de cada campo do seu reactive forms  
        //o botão será desabilitado se as validações do formulário estiverem inválidas ou se o valor de algum campo do formulário estiver diferente do valor de alguma propriedade do objeto funcionário
        this.desabilitar = this.formFuncionario.invalid || !(valores.nome != this.funcionario.nome || valores.email != this.funcionario.email || valores.foto.length > 0)
      }
    )
  }

  atualizar(){
    const fun: Funcionario = {...this.formFuncionario.value} 
    fun.idFuncionario = this.funcionario.idFuncionario
    fun.foto = this.funcionario.foto

    const temFoto = this.formFuncionario.value.foto.length>0 //para salvar a foto tbm
    const obsSalvar: Observable<any> = this.funcService.atualizarFuncionario(fun, temFoto? this.foto : undefined ) //para salvar a foto tbm

    obsSalvar.subscribe( //para salvar a foto tbm
      (resultado)=>{
        if  (resultado instanceof Observable<Funcionario>){
          resultado.subscribe(
            (func)=>{
              this.snackBar.open('Funcionário atualizado com sucesso', 'Ok', { duration: 3000})
              this.recuperarFuncionario(func.idFuncionario)
            }
          )         
        }
        this.recuperarFuncionario(resultado.idFuncionario)
      }
    )

    /* this.funcService.atualizarFuncionario(fun).subscribe(
     ()=>{
      location.reload()
      this.snackBar.open(`Funcionário atualizado com sucesso!`, 'OK', {duration: 3000})
      }
    ) */
    
  }

  deletarFuncionario():void{
    const dialog = this.dialog.open(FormDeleteComponent)
    const fun: Funcionario = {...this.formFuncionario.value} 
    fun.idFuncionario = this.funcionario.idFuncionario

    dialog.afterClosed().subscribe(
      (boolean)=>{
        if (boolean){
          this.funcService.deleteFuncionario(fun).subscribe(
            () =>{
              this.router.navigateByUrl('/funcionarios')
              this.snackBar.open('Funcionário deletado com sucesso!', 'OK', {duration: 3000, horizontalPosition:'center', verticalPosition:'bottom'})
            },
            (error) => {
              this.snackBar.open('Não foi possível deletar esse funcionário', 'Ok', {duration:3000})
            }
          )
        }
      }
    )
  }
  
}
