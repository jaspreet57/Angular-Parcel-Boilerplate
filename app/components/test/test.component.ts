import { Component, OnInit } from '@angular/core';
import templateString from './test.component.html';

@Component({
    selector: 'app-test',
    template: templateString,
})
export class TestComponent implements OnInit {
    test: String = 'test One';
    
    constructor() { }

    ngOnInit() {
    }
}