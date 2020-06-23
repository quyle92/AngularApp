import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
//import {orderBy} from 'lodash';
import  "lodash";
declare var _:any;
import {ViewChild, ElementRef} from '@angular/core';//use for template ref var

//for Route: để xài mấy cái như [RouterLink]=['/path']
import { Router} from '@angular/router';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

		constructor(
			public routerService : Router, 
		) {}

	public filterId:number;
	public filterName: string;
	public filterPrice: string;
	public filterStatus: string;

	public text:string;
	public name: string = "Thanh Quy";
	public age: number = 18;
	public isMarried: boolean = true;
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
	public arrNumber: number[] = [1000,1600,700,800,900,0];
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
	


	ngOnInit(): void {
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
			id: 1324,
			name: 'Iphone 6 Plus',
			price: 1600,
			status: 1
		},
		{
			id: 2321,
			name: 'Nokia Xpress Music',
			price: 700,
			status: 0
		},
		{
			id: 3234,
			name: 'Oppo China',
			price: 800,
			status: 1
		},
		{
			id: 4234,
			name: 'VSmart',
			price: 900,
			status: 0
		},
		{
			id: 51234,
			name: 'Sony Xperia',
			price: 1000,
			status: 1
		}
	];

	public tenCuaToi : string;

	public selectedColor : string;
	public colors: any[] = [
		{code:'#FF0000', name:'Red'}, {code:'#00FF00', name:'Green'}, {code:'#0000FF', name:'Blue'}
	];

	public sortBy(args){
		this.sortValue = -this.sortValue;
		var comparison = 0;
		if(args ==="name")
		{
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
		if(args ==="price")
		{
			this.productsFromServer.sort((a,b) => {
				comparison = (a.price > b.price) ?  1 : (a.price < b.price) ?  -1 :  0;
				return (this.sortValue === -1) ? (comparison * -1) : comparison;
			});


		}

	}

	public sortValueLodash: number = 1;
	public sortByLodash(args){
		this.sortValueLodash = -this.sortValueLodash;
		var comparison = 0;
		if(args ==="name"){
			 return this.productsFromServer =  _.orderBy(this.productsFromServer, ['name'],[(this.sortValueLodash===1)?"asc":"desc"]);
		}
	}


	public txtName: HTMLInputElement;
	public onGetData(args: HTMLInputElement){
		this.txtName = args;
		//console.log(this.txtName);
	}

	public fullName: string;
	@ViewChild('firstNameInput') nameInputRef: ElementRef;//ElementRef is used to access any element of our DOM
	public onGetDataRef(lastNameInput){
		//console.log(lastNameInput.value);
		this.fullName = this.nameInputRef.nativeElement.value + " " + lastNameInput.value;
	}

	public onTogglelifeCycleHook(){
		this.isMarried = !this.isMarried;
		//console.log(this.isMarried);
	}

	public total: number = 0;
	public onSum(a, b) {
		this.total = parseInt(a) + parseInt(b);
	}

	public value: string = "Món quà";
		
	public thethao:string;
  	clickLifeCycleHook(thethao){
  		this.thethao = thethao.value;
  		//console.log(this.thethao);
  	}

  	@ViewChild('products') arrProductAfter;
  	ngAfterViewInit(){
  		// console.log('ngAfterViewInit: AppComponent')
  		// console.log('this.arrProductAfter')
  	}

  	ngAfterViewChecked(){
  		// console.log('ngAfterViewChecked: AppComponent')
  		// console.log(this.arrProductAfter)
  	}

  	addProduct(val){
  		this.productsFromServer.push({
  			id: 6780,
  			name: val
  		});
  	}

  	navigate(url : string){
  		// cách 1: this.routerService.navigate([url]);
  		this.routerService.navigateByUrl(url);
  	}

  	logOut(){
  		if(localStorage.getItem('nguoiDangNhap'))	
  		{
  			localStorage.removeItem('nguoiDangNhap');
  			this.routerService.navigate(['/login']);

  		}

  	}

  	
}	
