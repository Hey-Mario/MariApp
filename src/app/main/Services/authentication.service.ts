import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  link = 'http://localhost:3000/users'
  constructor(
    private http: HttpClient,

  ) { }
  login(info: any){
    return this.http.post(this.link, info);
  }
}
