import { Component, OnInit, Input } from '@angular/core';
import { Human } from '../human';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { HumanService } from '../human.service';

@Component({
  selector: 'app-human-detail',
  templateUrl: './human-detail.component.html',
  styleUrls: ['./human-detail.component.css']
})
export class HumanDetailComponent implements OnInit {
  human: Human;

  constructor(
    private route: ActivatedRoute,
    private humanService: HumanService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHuman();
  }
  getHuman(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.humanService.getHuman(id)
    .subscribe(human => this.human = human);
  }
  goBack(): void {
    this.location.back();
  }

}
