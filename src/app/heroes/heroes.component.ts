import { Component, OnInit } from '@angular/core';
import { Hero } from 'app/hero';
import { HeroService } from 'app/hero.service';
import { Router } from "@angular/router";

@Component({
  selector: 'yuc-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  title = 'Tour of Heroes';

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private router: Router,private heroService: HeroService){

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
}
}
