import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js'
import {ALL_REG_LIST, ALL_REGION_DET} from "../model/mock-regions";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-compare-chart',
  templateUrl: './compare-chart.component.html',
  styleUrls: ['./compare-chart.component.css']
})
export class CompareChartComponent implements AfterViewInit {

  constructor(private _http: HttpClient) { }

  chart = [];
  all_regions_detail = ALL_REGION_DET;
  MONTHS =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  years = [];
  weather_conditions=['maxT', 'minT', 'meanT']
  compare_year: string;
  compare_data: string;

  ngAfterViewInit(){
    this._http.get("https://uk-climate-api.herokuapp.com/years").subscribe(y_data => {
      this.years = y_data['years'];
    });
    this.refreshCompareChart([],[],[],[]);
  }

  onYearChange(){
    this._http.get("https://uk-climate-api.herokuapp.com/conditions").subscribe(y_data => {
      this.weather_conditions = y_data['conditions'];
    });
  }
  onConditionChange(){
    let url_api="https://uk-climate-api.herokuapp.com/compare/"+this.compare_year+"/"+this.compare_data;
    console.log(url_api);
    this._http.get(url_api).subscribe(temp_data => {
      this.refreshCompareChart(temp_data['UK'], temp_data['England'], temp_data['Wales'], temp_data['Scotland']);
    });

  }

  refreshCompareChart(uk_data, en_data, wa_data, sc_data):void{
    //start test code
    var months =this.MONTHS;
    var UK = uk_data;
    var England = en_data;
    var Wales = wa_data;
    var Scotland= sc_data;
    var all_data_sets= {
      labels: months,
      // Start dataset
      datasets:[
        {
          label: "UK",
          data: UK,
          borderColor:'#e57373',
          borderWidth: 1,
          backgroundColor: 'rgba(229, 115, 115, 0.2)'
        },
        {
          label: "England",
          data: England,
          borderColor: '#42a5f5',
          borderWidth: 1,
          backgroundColor: 'rgba(66, 165, 245, 0.2)'
        },
        {
          label: "Wales",
          data: Wales,
          borderColor: '#26a69a',
          borderWidth: 1,
          backgroundColor: 'rgba(38, 166, 154, 0.2)'
        },
        {
          label: "Scotland",
          data: Scotland,
          borderColor: '#ffb74d',
          borderWidth: 1,
          backgroundColor: 'rgba(255, 183, 77, 0.2)'
        }]
    };
    let chart_options ={
      responsive: true,
      title:{
        display:true,
        text:'Max Temperature for UK Regions in 1920'
      }
    };
    this.chart = new Chart('compare-chart', { type: 'bar', data: all_data_sets, options: chart_options });
  }
}
