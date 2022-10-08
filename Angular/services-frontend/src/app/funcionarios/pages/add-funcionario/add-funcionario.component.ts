import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-funcionario',
  templateUrl: './add-funcionario.component.html',
  styleUrls: ['./add-funcionario.component.css']
})
export class AddFuncionarioComponent implements OnInit {

  funcionarioForm: FormGroup = this.fb.group({
    nome:['', [Validators.required]],
    email:['',[Validators.required]],
    foto:['']
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
