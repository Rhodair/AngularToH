import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private router: Router,
        private heroService: HeroService) { }

    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }
    
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

    goToDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
