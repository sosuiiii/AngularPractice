import { Component, OnInit } from '@angular/core';
import { Human } from '../human';
import { HUMANS } from '../mock-humans';

@Component({
  selector: 'app-humans',
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.css']
})
export class HumansComponent implements OnInit {
  humans = HUMANS;
  selectedHuman: Human;
  onSelect(human: Human): void {
    this.selectedHuman = human;
  }
  constructor() { }

  ngOnInit() {
  }

}
