import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Human } from '../human';
import { HumanService } from '../human.service';


@Component({
  selector: 'app-human-search',
  templateUrl: './human-search.component.html',
  styleUrls: ['./human-search.component.css']
})
export class HumanSearchComponent implements OnInit {
  humans$: Observable<Human[]>;
  private searchTerms = new Subject<string>();

  constructor(private humanService: HumanService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.humans$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.humanService.searchHumans(term)),

    );
  }

}
