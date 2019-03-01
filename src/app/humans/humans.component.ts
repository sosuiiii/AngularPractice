import { Component, OnInit } from '@angular/core';
import { Human } from '../human';
// import { HUMANS } from '../mock-humans';
import { HumanService } from '../human.service';


@Component({
  selector: 'app-humans',
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.css']
})
export class HumansComponent implements OnInit {
  humans: Human[];
  
  getHumans(): void {
    this.humanService.getHumans()
    .subscribe(humans => this.humans = humans);
  }
  constructor(private humanService: HumanService) { }

  ngOnInit() {
    this.getHumans();
  }

}
