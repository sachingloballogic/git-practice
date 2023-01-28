import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginupComponent } from './loginup/loginup.component';



@NgModule({
  declarations: [
    LoginupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginupComponent
  ]
})
export class LoginAuthModule { }
