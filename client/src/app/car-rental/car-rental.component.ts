import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {

  constructor(
    private router: Router, 
  ) { }

  cars: any = []

  redirect(): void {
    this.router.navigate(['myCar']);
  }

  ngOnInit(): void {
    const getData = async () => {
      const token = localStorage.getItem('token')!;     
      const { data } = await axios.get('http://localhost:3000/car', { headers: { authorization: token }});
      this.cars.push(...data.cars);
    }
  }

  async onClick(id: string): Promise<void> {
    const token = localStorage.getItem('token');
    await axios.post(`http://localhost:3000/car/rent/${ id }`, { headers: { authorization: token }});
    this.redirect();
  }

}
