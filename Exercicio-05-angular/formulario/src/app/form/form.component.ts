import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
'../components/register/register.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  PersonalForm = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    address: [null, Validators.required],
    idCard: [null, Validators.required],
    ssnCard: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {
  }

  onSubmit(): void {
    alert('Usuário Cadastrado com sucesso!');
  }

  onReset(): void {
    alert('Formulário Limpo!');
  }

}
