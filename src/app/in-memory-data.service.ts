import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Human } from './human';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const humans = [
      { id: 1, name: 'Sossui' },
      { id: 2, name: 'Daikon' },
      { id: 3, name: 'Motikintyaku' },
      { id: 4, name: 'Tikuwa' },
      { id: 5, name: 'Konbu' },
      { id: 6, name: 'Tamago' },
      { id: 7, name: 'Konnyaku' },
      { id: 8, name: 'Oden' },
      { id: 9, name: 'Kastuobushi' },
      { id: 10, name: 'Hawaiikitai' }
    ];
    return {humans};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(humans: Human[]): number {
    return humans.length > 0 ? Math.max(...humans.map(human => human.id)) + 1 : 11;
  }
}