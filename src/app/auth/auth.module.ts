import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from '../register/register.component';


const routes = [
  {
    path: 'register',
    component: RegisterComponent,
  }
]

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AuthModule { }
