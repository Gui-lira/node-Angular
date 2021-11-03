import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,  Routes, RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [  
  { path: '', component: LoginComponent },
  { path: 'rentalCars', component: CarRentalComponent },
  { path: 'myCar', component: ProfileComponent },
  { path: 'register', component:RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CarRentalComponent,    
    ProfileComponent,    
  ],
  imports: [
    RouterModule.forRoot(routes),
    RouterModule,
    BrowserModule,    
    ReactiveFormsModule,
    FormsModule,        
  ],
  providers: [RouterLink, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
