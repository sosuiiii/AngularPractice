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

  add(name: string): void {
    name = name.trim();
    if(!name) { return; }
    this.humanService.addHuman({ name } as Human)
    .subscribe(human => {
      this.humans.push(human);
    });
  }
  
  getHumans(): void {
    this.humanService.getHumans()
    .subscribe(humans => this.humans = humans);
  }
  constructor(private humanService: HumanService) { }

  ngOnInit() {
    this.getHumans();
  }
  delete(human: Human): void {
    this.humans = this.humans.filter(h => h !== human);
    this.humanService.deleteHuman(human).subscribe();
  }

}
