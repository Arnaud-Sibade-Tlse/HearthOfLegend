import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  id:String;
  pseudo:String;
  token:String;
  
  messErreur:String;
  isAcc:boolean = false;
  
  auth:boolean = false;
  
  constructor() { }

  getUserID(){
	  return this.id;
  }
  
  getUserPseudo(){
	  return this.pseudo;
  }
  
  getUserToken(){
	  return this.token;
  }
  
  getMessErr(){
	  return this.messErreur;
  }
  
  getIsAcc(){
	  return this.isAcc;
  }
  
  getAuth(){
	  return this.auth;
  }
 
  setUserInfo(id,name,token){
       this.pseudo = name;
       this.id = id;
       this.token = token;
  }
	
  setMessErr(messErr,bool){
      this.messErreur = messErr;
	  this.isAcc = bool;
  }
  
  setAuth(bool){
	  this.auth = bool;
  }
}
