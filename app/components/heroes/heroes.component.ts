import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import templateString from './heroes.component.html';
import { Hero } from '../../models/hero.model';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app-heroes',
    template: templateString,
})
export class HeroesComponent implements OnInit {
    @Input() selectedHero: Hero;
    heroes: Hero[];
    @Output() select: EventEmitter<Hero> = new EventEmitter<Hero>();

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.select.emit(hero);
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    }

}