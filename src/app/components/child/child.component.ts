import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
	@Input('tenCuaToi') myName: string;
	@Input('tuoi') age: number;
	@Input('ketHon') isMarried: boolean;

	@Input('listNhanVien') employees: any[];
    @Input() soLuongNV: number;
    @Input() soLuongNVNam: number;

	private _employment: string ;
	@Input() 
	set employment(job:string){
		this._employment = job;
		console.log(job);
	}
	get employment(){
		return this._employment;
	}

	public hobby:string;
	@Output() Enterhobby: EventEmitter<string> = new EventEmitter<string>();
	onSubmit(){
	  	console.log(this.hobby);
		this.Enterhobby.emit(this.hobby);
	}

	public selectedRadioButtonValue: string = "all";
	@Output()
	countRadioButtonValue: EventEmitter<string> = new EventEmitter<string>();
	onRadioButtonChange(){
		this.countRadioButtonValue.emit(this.selectedRadioButtonValue);
		//console.log(this.selectedRadioButtonValue);
	}

	constructor() { console.log(this.selectedRadioButtonValue);}

	ngOnInit(): void {
	}
}	
