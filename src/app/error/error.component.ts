import { Component, OnInit } from '@angular/core';
//import { JsonReader } from '.json.error';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']/*,
  providers:[JsonReader]*/
})
export class ErrorComponent implements OnInit {

  let err = "";

  constructor(param: err) {
    this.err = param.err;
  }

  ngOnInit() {
  }


}
