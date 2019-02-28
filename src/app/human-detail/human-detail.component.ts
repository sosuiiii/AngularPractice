import { Component, OnInit, Input } from '@angular/core';
import { Human } from '../human';

@Component({
  selector: 'app-human-detail',
  templateUrl: './human-detail.component.html',
  styleUrls: ['./human-detail.component.css']
})
export class HumanDetailComponent implements OnInit {
  @Input() human: Human;
  constructor() { }

  ngOnInit() {
  }

}
