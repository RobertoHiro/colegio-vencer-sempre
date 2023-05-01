import { Component } from '@angular/core';
// import { User } from './class/user';
import { User } from './class/user/user.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Colegio-Vencer-Sempre';
  localStorage = window.localStorage;
  hasUser = false;
  localUser:string|null;

  constructor(private router: Router){
    this.localUser = this.localStorage.getItem("user");
    console.log(this.localUser);
  }
  ngOnInit(){
    if (this.localUser) {
      this.hasUser = true;
      this.router.navigateByUrl("/main");
    }
    else{
      this.router.navigateByUrl("/login");
    }
  }
}
