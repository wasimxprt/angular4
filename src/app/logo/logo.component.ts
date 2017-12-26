import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  srcpath: string = "assets/logo.png";
  hello: string = "Say hi";
  welcome:string = "";

  sayHello() {
    return this.hello = "Angular4";
  }

  showValue(event) {
    console.dir(event.target.value)
    this.welcome = event.target.value
  }

  constructor() { }

  ngOnInit() {
  }
}
