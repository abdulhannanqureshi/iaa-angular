 import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	logIn:FormGroup;
	submitted = false;
  constructor() { }

  ngOnInit() {
  	this.logIn = new FormGroup({
  		email: new FormControl('',Validators.compose([
  				Validators.required,
  				Validators.pattern("[^ @]*@[^ @]*")
  			])),
  		passwd: new FormControl('',Validators.compose([
  			Validators.required,
  			Validators.maxLength(8),
  			Validators.minLength(6)
  			])),
  	});
  }
  get f(){
  	return this.logIn.controls
  }

  logInSubmit(){
  	this.submitted = true;
  	if(this.logIn.invalid){
  		return false;
  	}
  	console.log(this.logIn.value);
  }

}
