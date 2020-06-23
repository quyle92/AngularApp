import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	public error: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  // onAccess(key)
  // {
  // 	if(key==='123'){//console.log(key);
  // 		localStorage.setItem('key',key);
  //    // console.log(localStorage.getItem('key'));
  // 	}
  // 	else {
  // 		this.error = -1;
  // 	}
  // }

}
