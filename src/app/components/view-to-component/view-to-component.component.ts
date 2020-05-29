import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {
	public count: number = 0;
	public count2: number = 0;
	public username: string;
	public hobby: string;
	public religion:string;

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(event) {
  	console.log(event.target.innerText);
  }

  onIncr(event) {
  	this.count += 1;
  }

  onKeyUp(event){
  	this.username = event.target.value;
  }

  onKeyUpEnter(event){
  	this.hobby = event.target.value;
  }

  onEnter(value){
  	this.religion = value;
  }

}
