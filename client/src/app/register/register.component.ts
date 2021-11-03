import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { };
  
  registerForm = this.formBuilder.group({
    email: [''],
    password: [''],
    cpf: [''],
    name: [''],
  });

  private redirect(): void {
    this.router.navigate(['rentalCars']);
  };

  async onSubmit(): Promise<void> {
    const { value } = this.registerForm;
    const raw = await axios.post('http://localhost:3000/user');
    if (raw.status === 200) {
      localStorage.setItem('token', raw.data.token);
      this.redirect();
    }
  }

}
