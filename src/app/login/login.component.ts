import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup
  submited: Boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private api : ApiService,
    private router: Router,
  ) {
    this.formLogin = this.formBuilder.group({
      'username': [''],
      'password': ['']
    });
   }

  ngOnInit() {
  }

  
  getLogin(){
    this.api.login(this.formLogin.value).subscribe(
      response => {
        console.log(response);
        localStorage.setItem('token',response.token);
        console.log(localStorage.getItem('token'));
        this.router.navigate(['/autos']);
      }
    )
  }

  sendLogin(){
    this.submited = true;
    if(this.formLogin.invalid){
      return;
    }
    this.submited = false;
    console.log(this.formLogin.value.username + this.formLogin.value.password);
    this.getLogin();
  }
}
