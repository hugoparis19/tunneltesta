import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'app/forbidden-validator.directive';
import { Hero } from 'app/hero';
import { states } from '../data-model';
import { Address } from "app/address";

@Component({
  selector: 'yuc-hero-form-reactive',
  templateUrl: './hero-form-reactive.component.html',
  styleUrls: ['./hero-form-reactive.component.css']
})
export class HeroFormReactiveComponent implements OnInit {
  heroForm: FormGroup;
  states = states;
  powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  hero = new Hero(18, 'Dr. WhatIsHisName', this.powers[0], 'Dr. What');

  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }

  ngOnInit() {
  }

  // ngOnChanges() {
  //   this.heroForm.setValue({
  //     name:    this.heroRef.name,
  //     address: this.heroRef.addresses[0] || new Address()
  //   });
  // }

  createForm() {

    this.heroForm = this.fb.group({
      name: ['', [Validators.required, forbiddenNameValidator(/bob/i)]],
      //address: this.fb.group(new Address()),
      secretLairs: this.fb.array([this.fb.group(new Address())]), // <-- secretLairs as an empty FormArray
      power: '',
      sidekick: ''
    });

    // this.heroForm.setValue({
    //   name: this.hero.name,
    //   //address: new Address(),
    //   power: 'x-ray vision',
    //   sidekick: true
    // });


    // this.heroForm = this.fb.group({
    //   name: ['', Validators.required ],
    //   street: '',
    //   city: '',
    //   state: '',
    //   zip: '',
    //   power: '',
    //   sidekick: ''
    // });
  }

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name
    });
    this.setAddresses(this.hero.addresses);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  };

  displayGang(index: number): boolean{
    const address = this.heroForm.value.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    )[index];

    return address.state === 'CA';
  }

  setAddresses(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }

  addLair() {
    this.secretLairs.push(this.fb.group(new Address()));
  }

  onSubmit() {
    debugger;
    this.hero = this.prepareSaveHero();
    //this.heroService.updateHero(this.hero).subscribe(/* error handling */);
    this.ngOnChanges();
  }

  prepareSaveHero(): Hero {
    const formModel = this.heroForm.value;

    // deep copy of form model lairs
    const secretLairsDeepCopy: Address[] = formModel.secretLairs.map(
      (address: Address) => Object.assign({}, address)
    );

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    const saveHero: Hero = {
      id: this.hero.id,
      name: formModel.name as string,
      // addresses: formModel.secretLairs // <-- bad!
      addresses: secretLairsDeepCopy,
      power: formModel.power
    };
    return saveHero;
  }

}
