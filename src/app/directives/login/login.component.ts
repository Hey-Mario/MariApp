import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any;

  constructor(
    private authentificationService: AuthenticationService,
  ) { }

  ngOnInit(): void {
  }
  login(formulaire: NgForm){
    this.authentificationService.login(formulaire).subscribe(
      (response) => {
        // this.token = response.id
        console.log(response)
      }
    )
  }
}
