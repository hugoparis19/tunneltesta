import { Hero } from "app/hero";

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Whirlwind',
    addresses: [
      {street: '123 Main',  city: 'Anywhere', state: 'CA',  zip: '94801', gang : ''},
      {street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226', gang : ''},
    ],
    power: 'Really Smart'
  },
  {
    id: 2,
    name: 'Bombastic',
    addresses: [
      {street: '789 Elm',  city: 'Smallville', state: 'OH',  zip: '04501', gang : ''},
    ],
    power: 'Really Smart'
  },
  {
    id: 3,
    name: 'Magneta',
    addresses: [ ],
    power: 'Really Smart'
  },
];

export const states = ['CA', 'MD', 'OH', 'VA'];

export const gang = ['bloods', 'crips'];