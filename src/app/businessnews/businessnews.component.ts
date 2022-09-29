import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.scss']
})
export class BusinessnewsComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  constructor(private _services:NewsapiservicesService) { }

  businessnewsDisplay:any = [];

  ngOnInit(): void {
    console.log("ngOnInit");
    this._services.businessNews().subscribe((result)=>{
      this.businessnewsDisplay = result.articles;
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changed");
  }

  ngDoCheck(): void {
    console.log("Checked");
  }

  ngOnDestroy(): void {
    console.log("Destroyed business news page");
  }

}
