import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { LogoComponent } from './logo/logo.component';
import { RegistrationComponent } from './registration/registration.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputFormComponent } from './data-binding/app-form/app-form.component';
import { DisplayComponent } from './data-binding/app-display/app-display.component';


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
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
