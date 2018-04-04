import { Component, OnInit } from '@angular/core';
import { JsonReader } from '.json.error';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  providers:[JsonReader]
})
export class ErrorComponent implements OnInit {

  datas=[];

  constructor(private _json : JsonReader) { }

  ngOnInit() {
    this._json.getInf().subscribe(message => this.datas = resUsData);
  }


}
