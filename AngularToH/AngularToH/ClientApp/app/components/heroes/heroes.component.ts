import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css'],
    providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
