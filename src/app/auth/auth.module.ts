import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  }
]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes),ReactiveFormsModule
  ]
})
export class AuthModule { }
