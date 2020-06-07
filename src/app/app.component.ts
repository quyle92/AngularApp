import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public filterId:number;
	public filterName: string;
	public filterPrice: string;
	public filterStatus: string;

	public text:string;
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
	public arrNumber: number[] = [1,3,2,5,6,0];
	public sortValue: number = 1;
	public onCompare(args){
		this.sortValue = args;
	}
	public tang() : void{
		var asc =  this.arrNumber.sort((a,b) => {
		    	return a-b;
		    });
		this.arrNumber = asc.slice();
		//console.log(this.arrNumber);
	}
	public giam() : void{
		var desc =  this.arrNumber.sort((a,b) => {
		    	return b-a;
		    });
		this.arrNumber = desc.slice();
		//console.log(this.arrNumber);
	}
	
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

	public productsFromServer:any[] = [
		{
			id: 1,
			name: 'Iphone 6 Plus',
			price: '$600',
			status: 1
		},
		{
			id: 2321,
			name: 'Nokia Xpress Music',
			price: '$700',
			status: 0
		},
		{
			id: 3234,
			name: 'Oppo China',
			price: '$800',
			status: 1
		},
		{
			id: 4234,
			name: 'VSmart',
			price: '$900',
			status: 0
		},
		{
			id: 51234,
			name: 'Sony Xperia',
			price: '$1000',
			status: 1
		}
	];

	public tenCuaToi : string;

	public selectedColor : string;
	public colors: any[] = [
		{code:'#FF0000', name:'Red'}, {code:'#00FF00', name:'Green'}, {code:'#0000FF', name:'Blue'}
	];

	public sortBy(){
		this.sortValue = -this.sortValue;
		var comparison = 0;
		if(this.sortValue == 1)
		{	
			this.productsFromServer.sort((a,b)=>{
				  //cách 1:
				  // if(a.name > b.name) comparison = 1;
				  //   if(a.name < b.name) comparison = -1;
				  //   return comparison;
				     return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
			});

		}

		if(this.sortValue == -1)
		{
			this.productsFromServer.sort((a,b)=>{
				//cách 1:
				  // if(a.name > b.name) comparison = 1;
				  //   if(a.name < b.name) comparison = -1;
				  //   return comparison* -1;
				    return a.name > b.name ? -1 : b.name > a.name ? 1 : 0;
			});

		}
	}


}