import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) {}
    //newsapiurl
    newsApiUrl = "https://newsapi.org/v2/top-headlines?country=ru&apiKey=a7b1d887197c4075ae11516180c1680d";
 
    //technewsapiurl
    techApiUrl = "https://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=a7b1d887197c4075ae11516180c1680d";

    //businessapiurl
    businessApiUrl = "https://newsapi.org/v2/top-headlines?country=ru&category=business&apiKey=a7b1d887197c4075ae11516180c1680d"

    //topheading()

    topHeading():Observable<any>
    {
      return this._http.get(this.newsApiUrl);
    }

    //technews()
    techNews():Observable<any>{
      return this._http.get(this.techApiUrl);
    }

    //businessnews()
    businessNews():Observable<any>{
      return this._http.get(this.businessApiUrl);
    }
}
