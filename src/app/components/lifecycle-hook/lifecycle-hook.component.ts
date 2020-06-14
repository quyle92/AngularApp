import { Component, OnInit, OnDestroy, Input, SimpleChanges, AfterContentInit, AfterContentChecked,ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit, OnDestroy {

	@Input() total: number;
	public lastTotal: number = 0;
	@ContentChild('giatri') value:ElementRef;

  	constructor() { 
  		//console.log('constructor');
  	}

	ngOnDestroy(){
		//console.log('ngOnDestroy');
	}

  	ngOnInit(): void {
  		//console.log('ngOnInit');
  	}

  	ngOnChanges(simpleChanges: SimpleChanges) {
  		this.lastTotal = simpleChanges.total.previousValue;
  	}

  	ngAfterContentInit(){
  		// console.log(this.value);
  		// console.log('ngAfterContentInit');
  	}

  	ngAfterContentChecked(){
  		//console.log('ngAfterContentChecked');
  	}







}
