import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public name: string = "Thanh Quy";
	public age: number = 18;
	public isMarried: boolean = false;
	title = 'AngularApp';
	public users: any[] =[
		{
	    RollNo: 1,
	    Name: "Roshan",
	    Marks: 78
	  	},
	  {
	    RollNo: 2,
	    Name: "Rahul",
	    Marks: 43
	  },
	  {
	    RollNo: 3,
	    Name: "Gaurav",
	    Marks: 85
	  },
	  {
	    RollNo: 4,
	    Name: "Mohit",
	    Marks: 80
	  },
	  {
	    RollNo: 5,
	    Name: "sohit",
	    Marks: 90
	  }
	];
	public	job: string = 'web dev';
	public employees: any[];
	

	constructor() {
		this.employees= [
			{code:'NV001', name:'Tom', gender:'Male'},
			{code:'NV002', name:'Jane', gender:'Female'},
			{code:'NV003', name:'Jimmy', gender:'Male'},
			{code:'NV004', name:'Kathy', gender:'Female'},
			{code:'NV005', name:'Paul', gender:'Male'},
		];
	 }

	 getTotalEmployeesCount(): number {
	 	return this.employees.length;
	 }

	 getTotalMaleEmployeesCount(): number {
	 	return this.employees.filter(e => e.gender === 'Male').length;
	 }

	getTotalFemaleEmployeesCount(): number {
	 	return this.employees.filter(e => e.gender === 'Female').length;
	 }

	 public myHobby:string;
	 displayHobby(value: string){
	 	//console.log(value);
	 	this.myHobby = value;
	 }

	 public selectedRadioButtonValue: string = "all";
	 onRadioButtonChange(value: string): void{
	 	this.selectedRadioButtonValue = value;
	 	//console.log(value);
	 }


}