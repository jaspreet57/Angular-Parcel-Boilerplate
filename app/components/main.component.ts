import { Component, OnInit, EventEmitter } from '@angular/core';
import templateString from './main.component.html';
import { Hero } from '../models/hero.model';
import { HeroDetailComponent } from './heroesDetail/heroes-detail.component';

@Component({
    selector: 'my-app',
    template: templateString
})
export class MainComponent implements OnInit {
    selectedHero: Hero;
    title: String = 'App title';

    constructor() {}

    ngOnInit() {
        console.log('Main component initialised');
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}