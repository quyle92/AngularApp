import { Component, OnInit } from '@angular/core';
import {LoggingService} from '../../services/logging.service';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor( private _loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  firstClick(){
  	this._loggingService.logging();
  }
}
