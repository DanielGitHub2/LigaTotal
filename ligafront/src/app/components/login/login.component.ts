import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    
    this.loginService.login('1', '1').subscribe(
      res => {
        console.log(res);      
    });

  }

  logIn(username: string, password: string, event: Event) {


  }


}