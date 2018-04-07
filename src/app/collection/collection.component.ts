import { Component, OnInit } from '@angular/core';
import { AllCardsService } from '../all-cards.service';
import { Card } from '../card/card';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  status: string;
  data: object;

  constructor(private allCardsService: AllCardsService) { }

  ngOnInit() {
      this.initCards();
  }

  initCards() {
    this.allCardsService.getCards().subscribe(data => this.status = data["status"]);
    this.allCardsService.getCards().subscribe(data => this.data = data["data"]);
  }

}
