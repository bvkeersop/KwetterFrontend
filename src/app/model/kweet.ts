export interface IKweet {
  publicId: string;
  textContent: string;
  date: Date;
}

export class Kweet implements IKweet {

  publicId: string = this.kweet.publicId;
  textContent: string = this.kweet.textContent;
  date: Date = this.kweet.date;

  constructor(public kweet: IKweet) {
  }

}
