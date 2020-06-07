import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
	public username:string = "Thanh Quy";
	public isShow:boolean = true;
	public isChecked:boolean = true;
	onChange(value){
  		console.log(value);
  		this.isChecked = value;
  	}
	public socialClass:boolean;
	// onSwitch() {
	// 	this.socialClass = !this.socialClass;
	// 	console.log(this.socialClass);
	// }
	public age:number;
	public cities:string[] = ['New York', 'Chicago','Washington', 'Indiana'];
	public products:any[] =[
		{
			id: 1,
			name: 'Iphone 6 Plus',
			price: '$600'
		},
		{
			id: 2,
			name: 'Iphone 7 Plus',
			price: '$700'
		},

	];

	public productsFromServer:any[] =[
		{
			id: 1,
			name: 'Iphone 6 Plus',
			price: '$600'
		},
		{
			id: 2,
			name: 'Iphone 7 Plus',
			price: '$700'
		},
		{
			id: 3,
			name: 'Iphone 8 Plus',
			price: '$800'
		},
		{
			id: 4,
			name: 'Iphone 9 Plus',
			price: '$900'
		},
		{
			id: 5,
			name: 'Iphone 10 Plus',
			price: '$1000'
		}
	];


	public players: any[] = [
		{
			name: 'Chanathip',
			country: 'Thailand',
		},		{
			name: 'Kawin',
			country: 'Thailand',
		},		{
			name: 'Xuan Truong',
			country: 'Vietnam',
		},		{
			name: 'Duy Manh',
			country: 'Vietnam',
		},		{
			name: 'Aung Thu',
			country: 'Myanmar',
		},		{
			name: 'James',
			country: 'Philippines',
		},		{
			name: 'Evan Dimas',
			country: 'Indonesia',
		}

	];

 

  ngOnInit(): void {
  }

  	onToggle(){
  		/*cách 1*/
  		// if(this.isShow == true){
  		// 	this.isShow = false;
  		// } else {
  		// 	this.isShow = true;
  		// }
  		/*cách 2*/
  		this.isShow = !this.isShow;
  	}



  	trackById(index,item){
  		//return item.id; //cách 1
  		return index;//cách 2

  	}

  	onReload() {
  		this.products = this.productsFromServer;
  	}

}
