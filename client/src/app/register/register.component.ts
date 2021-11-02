import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }
  
  registerFrom = this.formBuilder.group({
    email: '',
    password: '',
    cpf: '',
    name: '',
  })

}
