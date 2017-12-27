import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-mylogin',
  templateUrl: './mylogin.component.html',
  styleUrls: ['./mylogin.component.css']
})
export class MyloginComponent implements OnInit {
  test: string = 'just a test';
  login: Object = {
    email: "",
    password: ""
  }

  constructor(private auth: AuthService) { }

  ngOnInit() {

  }

  doLogin() {
    let self = this;
    self.auth.login(self.login).then((response) => {
      console.log("response ", response)
    })
    console.log("name ", self.login)
  }

}
