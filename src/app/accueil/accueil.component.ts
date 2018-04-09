import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})


export class AccueilComponent {


	constructor(private routeur: Router,
				private http : Http
				) { }

    ngOnInit() {
    }


}