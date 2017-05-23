import { Address } from 'app/address';

export class Hero {

  addresses: Address[];

    constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }
}
