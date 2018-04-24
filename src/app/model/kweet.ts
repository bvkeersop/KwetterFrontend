import { Profile } from '../model/profile';

export class Kweet {
  id: string;
  text: string;
  likedBy: Profile[];

  constructor(text) {
    this.text = text;
  }

}
