import { Injectable } from '@angular/core';
import { UserLogin } from '../models/usuariologin';
import { Usuario } from '../models/usuarios';

@Injectable()
export class UserLoginService {

  public isUserLoggedIn;
  public userLogged:UserLogin;
  public usuarioLogeado:Usuario;

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user:UserLogin) {
    this.isUserLoggedIn = true;
    this.userLogged = user;
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  
  }

  getUserLoggedIn() {
    var user:UserLogin;
    var usr:string = sessionStorage.getItem('currentUser');

    if(usr!=null){
      this.isUserLoggedIn = true;
      return JSON.parse(sessionStorage.getItem('currentUser'));
    }
  }

  setUserLoggedOut() {
    this.isUserLoggedIn = false;
    sessionStorage.removeItem('currentUser')
  }

}