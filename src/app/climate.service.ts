import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClimateService {

  constructor(private _http: HttpClient) { }
  climateRegions(){
    return this._http.get("https://uk-climate-api.herokuapp.com/");
  }
  climateDataRegionYear(region:String, year:String){
    return this._http.get("https://uk-climate-api.herokuapp.com/temperature/"+region+"/"+year);
  }
  compareYearCondition(year:String, condition:String){
    return this._http.get("https://uk-climate-api.herokuapp.com/compare/"+ year +"/"+ condition);
  }

}
