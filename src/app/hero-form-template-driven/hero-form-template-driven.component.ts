import { Component, OnInit } from '@angular/core';
import { Hero } from "app/hero";

@Component({
  selector: 'yuc-hero-form-template-driven',
  templateUrl: './hero-form-template-driven.component.html',
  styleUrls: ['./hero-form-template-driven.component.css']
})
export class HeroFormTemplateDrivenComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
