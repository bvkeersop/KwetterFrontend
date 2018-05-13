export interface Notification {
  sender: string;
  message: string;
}

export class Notification {
  sender: string;
  message: string;

  constructor(sender: string, message: string) {
    this.sender = sender;
    this.message = message;
  }
}