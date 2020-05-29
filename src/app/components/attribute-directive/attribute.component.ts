import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeDirectiveComponent implements OnInit {
	public isSpecial : boolean = false;
	public isSwitch : boolean = false;
	public isSwitchStyle : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
  	this.isSpecial = !this.isSpecial;
  }

  onToggle(){
  	this.isSwitch = !this.isSwitch;
  }

  showNgClass(){
  	return {
  	'mau-nen'  : this.isSwitch === true,
  	'font-chu' : this.isSwitch ===true
 	}
  }

  onToggleStyle(){
  	this.isSwitchStyle = !this.isSwitchStyle;
  }

  showNgStyle(){
  	return {
  		'background' : this.isSwitchStyle == true ? 'blue':'',
  		'border' 	 : this.isSwitchStyle == true ? '1px solid black': ''
  	}
  }

}
