import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormDeleteComponent } from '../../components/form-delete/form-delete.component';
import { FormFuncionarioComponent } from '../../components/form-funcionario/form-funcionario.component';
import { Funcionario } from '../../models/funcionario';
import { FuncionarioService } from '../../services/funcionario.service';

@Component({
  selector: 'app-listar-funcionarios',
  templateUrl: './listar-funcionarios.component.html',
  styleUrls: ['./listar-funcionarios.component.css']
})
export class ListarFuncionariosComponent implements OnInit {

  funcionarios: Funcionario[] = []

  colunas: Array<string> = ['id', 'nome', 'email', 'actions']

  constructor(
    private funcService: FuncionarioService,
    private dialog: MatDialog,
    private snackBar:MatSnackBar
  ) { }

  ngOnInit(): void {
    //sucesso -> retornar os dados
    //erro -> ocorre um erro na fonte de dados
    //complete -> a fonte de dados te retorna tudo

    this.funcService.atualizarFuncionarioSub$
    .subscribe(
      (precisaAtualizar)=>{
        if(precisaAtualizar){
          this.recuperarFuncionarios()
        }
      }
    )
    

  }

//A função afterClosed() te retorna um observable que manda os dados que serão enviados para você  quando esse dialog for fechado
  deletarFuncionario(func: Funcionario): void{
    
    const dialog = this.dialog.open(FormDeleteComponent) //open() do dialog vai abrir o seu componente na tela como uma caixa de diálogo, basta informar a classe do componente que ele precisa abrir e ele te retorna uma referência desse componente que está aberto na sua tela

    //boolean == variável == true
    //boolean retorna um valor booleano true
    //como foi colocado no componente do confirmar deleção, o valor for TRUE, apaga o funcionário, se não, nada acontecerá

    dialog.afterClosed().subscribe(
      (boolean)=>{
        if (boolean){
          this.funcService.deleteFuncionario(func).subscribe(
            () =>{
              this.recuperarFuncionarios()
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

  recuperarFuncionarios(): void{
    this.funcService.getFuncionarios().subscribe(
      (funcs)=>{
          this.funcionarios = funcs.reverse() //reverte o array para que na lista os funcionários apareçam do mais novo para o mais antigo 
        },
        (erro)=>{
          console.log(erro)
        },
        ()=>{
          console.log('Dados enviados com sucesso')
        }
      )
  }

  abrirFormFuncionario():void{
    const referenciaDialog = this.dialog.open(FormFuncionarioComponent) //abrindo o formulário do funcionário e recuperando a referência desse dialog e guardando na variável

    //a função afterClosed() nos retorna um observable que notifica quando o dialog for fechado
    //quando o dialog for fechado, chamaremos a função que faz a requisição dos funcionários novamente
    referenciaDialog.afterClosed().subscribe(
      ()=>{
        this.recuperarFuncionarios()
      }
    )
  }

}
