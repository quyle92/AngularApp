import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	public error: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onAccess(key)
  {
  	if(key==='123'){//console.log(key);
  		localStorage.setItem('key',key);
     // console.log(localStorage.getItem('key'));
  	}
  	else {
  		this.error = -1;
  	}
  }

}
