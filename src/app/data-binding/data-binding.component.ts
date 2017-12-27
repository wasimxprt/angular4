import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'data-binding',
    templateUrl: './data-binding.component.html'
})
export class DataBindingComponent implements OnInit {


    colorArray = [{ color: 'pink', content: 'I am pink!' },{ color: 'indigo', content: 'I am indigo!' }];
    
    onPinkAdded(inputText: { content: string }) {
        this.colorArray.push({ color: 'pink', content: inputText.content });
    }
    onIndigoAdded(inputText: { content: string }) {
        this.colorArray.push({ color: 'indigo', content: inputText.content });
    }

    constructor() { }

    ngOnInit() {
    }

}
