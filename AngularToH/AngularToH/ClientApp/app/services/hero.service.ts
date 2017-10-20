import { Injectable } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    //constructor() { }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
    
    getHero(id: number): Promise<Hero> {
        return Promise.resolve({ id: 1, name: 'Wildstorm' });
        //return this.getHeroes()
        //    .then(heroes => heroes.find(hero => hero.id === id));
    }

}
