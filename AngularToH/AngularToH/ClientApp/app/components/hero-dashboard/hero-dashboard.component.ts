import { Component, OnInit } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'hero-dashboard',
    templateUrl: './hero-dashboard.component.html',
    styleUrls: ['./hero-dashboard.component.css']
})
export class HeroDashboardComponent implements OnInit {
    heroes: Hero[];

    constructor(private heroService: HeroService) { }

    ngOnInit() {
        // Collect top heroes
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(0, 4));
    }
}
