import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public error: number = 0;
  constructor(public router : Router) { }

  ngOnInit(): void {
  		if(localStorage.getItem('nguoiDangNhap'))
  			this.checkLogin();
  		console.log(localStorage.getItem('nguoiDangNhap'));
  }

  onLogin(username: string, password: string)
  {

  	if(username =="admin" && password =="123")
  	{	
 	  	let user = {
	  		tenDangNhap: username,
	  		matKhau: password
  		};
  		localStorage.setItem('nguoiDangNhap', JSON.stringify(user));
  		this.error = 1;
  	}
  	else
  	{
  		this.error = -1;
  	}
  }

  checkLogin(){
  		this.router.navigate(['']);
  }


}
