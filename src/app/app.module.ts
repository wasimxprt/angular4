import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ListComponent } from './list/list.component';
import { LogoComponent } from './logo/logo.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputFormComponent } from './data-binding/app-form/app-form.component';
import { DisplayComponent } from './data-binding/app-display/app-display.component';


import { SharedModule, FooterComponent, HeaderComponent } from './shared';
import { AuthService } from './services/auth.service';


const appRoutes: Routes = [
  { path: 'login', component: MyloginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'app', component: ListComponent },
  { path: 'logo', component: LogoComponent },
  { path: 'data-binding', component: DataBindingComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LogoComponent,
    RegistrationComponent,
    MyloginComponent,
    DataBindingComponent,
    InputFormComponent,
    DisplayComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule,
    HomeModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
