import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-display',
  templateUrl: './app-display.component.html'  
})
export class DisplayComponent implements OnInit {
@Input() colorElement: {color: string, content: string};
  constructor() { }
  ngOnInit() {
  }
}