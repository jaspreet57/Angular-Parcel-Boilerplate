import { Component, OnInit, Input } from '@angular/core';
import templateString from './heroes-detail.component.html';
import { Hero } from '../../models/hero.model';

@Component({
    selector: 'app-heroes-detail',
    template: templateString,
})
export class HeroDetailComponent implements OnInit {
    @Input() hero: Hero;

    constructor() { }

    ngOnInit(): void {
    }

}