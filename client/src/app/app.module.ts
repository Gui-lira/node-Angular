import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CarRentalComponent,    
    ProfileComponent,    
  ],
  imports: [
    RouterModule.forRoot([
        { path: '', component: LoginComponent },
        { path: 'rentalCars', component: CarRentalComponent },
        { path: 'myCar', component: ProfileComponent },
        { path: 'register', component:RegisterComponent },
    ]),
    BrowserModule,    
    ReactiveFormsModule,
    FormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
