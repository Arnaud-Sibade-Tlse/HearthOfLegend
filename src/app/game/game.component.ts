import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent} from '../card/card.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private routeur: Router) { }

  ngOnInit() {
  }

}
