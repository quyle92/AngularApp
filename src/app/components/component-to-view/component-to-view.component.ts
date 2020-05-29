import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit {
	public name:string = 'Thanh Quy';
	public age:number = 28;
	public gender:boolean = true;
	public user:object = {
		ten:"Quy",
		tuoi: 22,
		gioitinh:true
	};
	public a:object={firstName:'Jhone',age:26};
	public imgLink:string = "https://miro.medium.com/fit/c/96/96/1*GmzeaCXEXEC5D-oOZwQ9-A.jpeg";
	public imgLink2:string ="https://miro.medium.com/fit/c/40/40/0*RBw1tPz8MzmQw4yw."
	public isValid:boolean = true;
	public tblBorder:number =1;
	public isBorder:boolean = true;//if it is false, then class isBorder will not display
	public isChecked:number = 1;
	public isSpecial:boolean = true;
	public size:number = 25;

  constructor() { }

  ngOnInit(): void {
  }

  showInfo(){
  	return `${this.user['ten']}`;
  }

  printFirstName(){
   return `${this.a['firstName']}`;
  }

}
