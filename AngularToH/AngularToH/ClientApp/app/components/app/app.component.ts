import { Component } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [HeroService]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
