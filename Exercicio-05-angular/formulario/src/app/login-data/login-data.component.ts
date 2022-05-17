import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.component.html',
  styleUrls: ['./login-data.component.scss']
})
export class LoginDataComponent {
  loginForm = this.fb.group({
    email: [null, Validators.required],
    userLogin: [null, Validators.required],
    password: [null, Validators.required],
    cpassword: [null, Validators.required],
    imgPerfil: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}
}
