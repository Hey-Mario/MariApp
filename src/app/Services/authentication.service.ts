import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  link = 'https://jsonplaceholder.typicode.com/users'
  constructor(
    private http: HttpClient,

  ) { }
  login(info: any){
    this.http.post(this.link, info)
  }
}
