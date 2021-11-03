import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {  
  constructor(
    public car: any,
    private router: Router,    
  ) { }

  ngOnInit(): void {
    const getCar = async () => {
      const token = localStorage.getItem('token')!;
      const data: any = await axios.get('http://localhost:3000/user/car', { headers: { authorization: token }});
      this.car = data.car[0];
    };
    getCar();
  }

  redirect(): any {
    this.router.navigate(['login']);
  }

  async onClick(): Promise<void> {
    const token = localStorage.getItem('token')!;
    const headers = { authorization: token };
    await axios.post(`http://localhost:3000/user/return/${ this.car['_id'] }`, headers);
    this.car = {};
  }

}
