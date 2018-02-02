import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClimateService {

  constructor(private _http: HttpClient) { }
  climateRegions(){
    return this._http.get("http://127.0.0.1:5000/");
  }
  climateDataRegionYear(region:String, year:String){
    return this._http.get("http://127.0.0.1:5000/temperature/"+region+"/"+year);
  }
  compareYearCondition(year:String, condition:String){
    return this._http.get("http://127.0.0.1:5000/compare/"+ year +"/"+ condition);
  }

}
