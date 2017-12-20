import { Component, OnInit } from '@angular/core';
import { HotsService, Heroe } from '../../services/hots-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
   heroes: Heroe[]
  constructor(private _hotsService: HotsService) {
  }

  ngOnInit() {
    this._hotsService.getAllHeroes()
      .then((heroes: Heroe[]) => {
        this.heroes = heroes
      })
  }

}
