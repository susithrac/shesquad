import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpClient: HttpClient) {
  }

  validateUser(email, password): Observable<any>{
    return this.httpClient.post(environment.url+"/users/login",{email: email, password: password});
  }

}