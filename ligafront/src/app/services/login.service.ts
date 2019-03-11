import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(username:string, password:string) {
    return this.http.post('https://reqres.in/api/login', {
      username: username,
      password: password,     
    });     
  }
}
