import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../../classes/hero';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location) { }

    ngOnInit() {
        this.route.params
            .switchMap((params) => {
                return this.heroService.getHero(+params['id']);
            })
            .subscribe(hero => this.hero = hero || <Hero>{});
    }

    goBack() {
        this.location.back();
    }
}
