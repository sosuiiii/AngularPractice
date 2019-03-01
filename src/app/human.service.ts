import { Injectable } from '@angular/core';
import { Human } from './human';

import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HumanService {

  private humansUrl = 'api/humans'; //WebAPIのURL
  
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    private log(message: string) {
      this.messageService.add(`HumanService: ${message}`);
    }
    
    private handleError<T> (operation = 'operation', result?: T){
      return (error: any): Observable<T> => {
        console.error(error);
        this.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
    getHumans(): Observable<Human[]> {
      // this.messageService.add('Now, we display human infomation that is id,name')
      return this.http.get<Human[]>(this.humansUrl)
        .pipe(
          tap(humans => this.log('fetched humans')),
          catchError(this.handleError('getHumans', []))
        );
    }
    getHumanNo404<Data>(id: number): Observable<Human> {
      const url = `${this.humansUrl}/?id=${id}`;
      return this.http.get<Human[]>(url)
        .pipe(
          map(humans => humans[0]), // {0|1} 要素の配列を返す
          tap(h => {
            const outcome = h ? `fetched` : `did not find`;
            this.log(`${outcome} hero id=${id}`);
          }),
          catchError(this.handleError<Human>(`getHuman id=${id}`))
        );
    }
    getHuman(id: number): Observable<Human> {
      // TODO: send the message _after_ fetching the hero
      const url = `${this.humansUrl}/${id}`;
      return this.http.get<Human>(url).pipe(
        tap(_ => this.log(`fetched human id=${id}`)),
        catchError(this.handleError<Human>(`getHuman id=${id}`))
      );
    }
    searchHumans(term: string): Observable<Human[]> {
      if (!term.trim()) {
        return of([]);
      }
      return this.http.get<Human[]>(`${this.humansUrl}/?name=${term}`).pipe(
        tap(_ => this.log(`found humans matching "${term}"`)),
        catchError(this.handleError<Human[]>('searchHumans', []))
      );
    }  
    addHuman (human: Human): Observable<Human> {
      return this.http.post<Human>(this.humansUrl, human, httpOptions).pipe(
        tap((newHuman: Human) => this.log(`added human w/ id=${newHuman.id}`)),
        catchError(this.handleError<Human>('addHuman'))
      );
    }
    deleteHuman (human: Human | number): Observable<Human> {
      const id = typeof human === 'number' ? human : human.id;
      const url = `${this.humansUrl}/${id}`;
  
      return this.http.delete<Human>(url, httpOptions).pipe(
        tap(_ => this.log(`deleted hero id=${id}`)),
        catchError(this.handleError<Human>('deleteHero'))
      );
    }
    updateHuman (hero: Human): Observable<any> {
    
      return this.http.put(this.humansUrl, hero, httpOptions).pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      );
    }
  
    
}
