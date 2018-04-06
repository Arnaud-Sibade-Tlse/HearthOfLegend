import { Component, OnInit } from '@angular/core';
//import { JsonReader } from '.json.error';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],


})
export class ErrorComponent{

  err = "erreur 1 ";

  constructor(/*param: err*/) {
    //this.err = param.err;
  }

  getBack(){
     //router.navigate(['accueil']);
  }

  ngOnInit() {
  }


}
