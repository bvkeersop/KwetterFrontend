import { Profile } from '../model/profile';

export class Kweet {
  id: string;
  text: string;
  creationDate: Date;

  constructor(text) {
    this.text = text;
  }

}
