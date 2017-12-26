import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  srcpath:string = "assets/logo.png";
  title:string = "Testing directives and bindings";
  listItems : any[] = ['Movie 1','Movie 2','Movie 3','Movie 4'];

  constructor() { }

  ngOnInit() {
  }

  onSelect(){
    console.log("clicked");
  }
}
