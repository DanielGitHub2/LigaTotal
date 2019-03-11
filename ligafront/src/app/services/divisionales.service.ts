import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Divisional } from '../models/divisionales';

@Injectable({
  providedIn: 'root'
})
export class DivisionalesService {

  selectedDivisional: Divisional;
  divisional: Divisional[];
  
  readonly URL_Base = 'http://localhost:3000/'
  readonly URL_API = this.URL_Base + 'liga/divisional';

  constructor(private http: HttpClient) { 
    this.selectedDivisional = new Divisional();
  }

  postDivisional(divisional: Divisional) {
    return this.http.post(this.URL_API, divisional);
  }
 
  getDivisional() {
    return this.http.get(this.URL_API);
  }

  putDivisional(divisional: Divisional) {
    return this.http.put(this.URL_API + `/${divisional.divisionalid}`, divisional);
  }

  deleteDivisional(divisionalid: number) {
    return this.http.delete(this.URL_API + `/` + divisionalid);
  }

}