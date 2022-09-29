import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-topheading', 
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TopheadingComponent implements OnInit, OnDestroy {

  constructor(private _services:NewsapiservicesService) { }

  //display data
  topheadingDisplay:any = [];

  ngOnInit(): void {
  
    this._services.topHeading().subscribe((result)=>{
      console.log(result);
      this.topheadingDisplay = result.articles;
    })
  }

      
  ngOnDestroy(): void {
    console.log("Destroyed topheading news page");
  }

}
