import { Injectable } from '@angular/core';
import { Card } from './card/card';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AllCardsService {

  private championsUrl = 'https://los.ling.fr/cards/getAll';

  constructor(private http: HttpClient) { }

  getCards() {
      var req = this.http.get(this.championsUrl);
      return req;
  }

}
