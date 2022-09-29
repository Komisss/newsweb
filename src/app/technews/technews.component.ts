import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.scss']
})
export class TechnewsComponent implements OnInit, OnDestroy {

  constructor(private _services:NewsapiservicesService) { }

  technewsDisplay:any = [];

  ngOnInit(): void {
    console.log("Initialize tech page");
    this._services.techNews().subscribe((result)=>{
      this.technewsDisplay = result.articles;
    })
  }

  ngOnDestroy(): void {
    console.log("Destroyed tech news page");
  }

} 
