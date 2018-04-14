export class User {
  id: number;
  username: string;
  avatar: string;
  email: string;
  token: string;

  constructor(id: number, username: string, avatar: string, email: string, token: string) {
    this.id = id;
    this.username = username;
    this.avatar = avatar;
    this.email = email;
    this.token = token;
  }
}