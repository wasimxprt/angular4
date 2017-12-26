import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './app-form.component.html'  
})
export class InputFormComponent implements OnInit {
  @Output() onPinkClick = new EventEmitter<{content: string}>();
  @Output() onIndigoClick =  new EventEmitter<{content: string}>();
  newContent = '';
  constructor() { }
  onAddPink() {
    this.onPinkClick.emit({content: this.newContent});
  }
  onAddIndigo() {
    this.onIndigoClick.emit({content: this.newContent});
  }
  ngOnInit() {
  }
}