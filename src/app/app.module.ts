import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
// import { User } from './class/user';
import { UserComponent } from './class/user/user.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent},
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    UserComponent
  ],
  providers:[],
  bootstrap: [AppComponent]
})

export class AppModule { }
