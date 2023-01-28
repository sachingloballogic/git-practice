import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { StudentComponent } from './student/student.component';
import { CountryComponent } from './country/country.component';
import{FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { ChildComponent } from './child/child.component';
import { LoginAuthModule } from './login-auth/login-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    StudentComponent,
    CountryComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    LoginAuthModule
   
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
