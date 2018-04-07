import { Component, OnInit } from '@angular/core';
import { AllCardsService } from '../all-cards.service';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

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
