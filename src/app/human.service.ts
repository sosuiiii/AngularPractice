import { Injectable } from '@angular/core';
import { Human } from './human';
import { HUMANS } from './mock-humans';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HumanService {
  getHumans(): Observable<Human[]> {
    this.messageService.add('Now, we display human infomation that is id,name')
    return of(HUMANS);
  }
  getHuman(id: number): Observable<Human> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HumanService: fetched human id=${id}`);
    return of(HUMANS.find(human => human.id === id));
  }
  constructor(private messageService: MessageService) { }
}
