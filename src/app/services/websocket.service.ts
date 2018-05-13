import { Injectable } from '@angular/core';
import { ReplaySubject, Subject, Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class WebsocketService {

  constructor() { }

  private subject: ReplaySubject<MessageEvent>;

  public connect(url): ReplaySubject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }

  private create(url): ReplaySubject<MessageEvent> {

    //create connection
    let ws = new WebSocket(url);

    //define observable
    let observable = Observable.create(
      (obs: Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      });

    //define observer
    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          console.log("---sending ws message---");
          ws.send(JSON.stringify(data));
        }
      }
    };

    return ReplaySubject.create(observer, observable);
  }
}
