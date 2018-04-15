export class Profile {
  id: number;
  username: string;
  avatar: string;
  email: string;
  location: string;
  biography: string;
  password: string;
  website: string;

  constructor(username: string, biography: string, password: string, website: string, location: string) {
    this.username = username;
    this.biography = biography;
    this.location = location;
    this.website = website;
    //this.password = password;
  }

  //This is not correct
  setId(id) {
    this.id = id;
  }
}