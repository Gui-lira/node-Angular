import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  loginForm = this.formBuilder.group({
    email: '',
    password: '',
  });

  warning = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  private redirect(): void {
    this.router.navigate(['rentalCars']);
  }

  async onSubmit(): Promise<void> {
    const value = this.loginForm.value;
    const { status, data } = await (await axios.post('http://localhost:3000/user/login', { ...value }));
    if (status === 200) {
       localStorage.setItem('token', data.token);
       this.redirect();
    } else {
      this.warning = 'Login invalido';
    }
  }

}
