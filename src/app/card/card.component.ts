import { Component, OnInit } from '@angular/core';
import { AllCardsService } from '../all-cards.service';
import { Card } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  name: string;
  image: string;
  attack: number;
  defense: number;

  constructor() {

  }

  ngOnInit() {
    this.name = "Dieu";
    this.image = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg";
    this.attack = 1000;
    this.defense = 1500;
  }

}
