import {AfterViewInit, Component} from '@angular/core';
import { Chart } from 'chart.js';
import { ALL_REG_LIST, ALL_REGION_DET, chart_options } from "../model/mock-regions";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-climate-chart',
  templateUrl: './climate-chart.component.html',
  styleUrls: ['./climate-chart.component.css']
})
export class ClimateChartComponent implements  AfterViewInit{
  chart = [];
  MONTHS =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  region_list = ALL_REG_LIST;
  selected_region: string;
  update_data: any;
  maxT=[];
  minT=[];
  meanT=[];
  years = [];
  sel_year: string;

  constructor(private _http: HttpClient) { }

  ngAfterViewInit(){
    this._http.get("http://127.0.0.1:5000/").subscribe(reg_data => {
      this.region_list = reg_data['regions'];
    });
    this.refreshClimateChart([],[],[]);
  }
  onRegionChange(){
    this._http.get("http://127.0.0.1:5000/years").subscribe(y_data => {
      this.years = y_data['years'];
    });
  }

  onYearChange(){
    let url_api="http://127.0.0.1:5000/temperature/"+this.selected_region+"/"+this.sel_year;
    console.log(url_api);
    this._http.get(url_api).subscribe(temp_data => {
      this.refreshClimateChart(temp_data['Tmin'], temp_data['Tmax'], temp_data['Tmean']);
    });

  }


  refreshClimateChart(minT, maxT, meanT){
    //start test code
    var time_series = this.MONTHS;
    var chart_options = chart_options;
    var all_data_sets= {
      labels: time_series,
      // Start dataset
      datasets:[
        {
          label: "Min",
          fill: true,
          backgroundColor: "rgba(0, 191, 255, 0.2)",
          borderColor: "#29b6f6",
          data: minT
        },
        {
          label: "Mean",
          fill:false,
          backgroundColor: "#424242",
          borderColor: "#424242",
          data: meanT
        },
        {
          label: "Max",
          fill: true,
          backgroundColor: "rgba(255, 209, 128,0.2)",
          borderColor: "#ffd180",
          data: maxT
        }]
    };

    this.chart = new Chart('weather-chart', { type: 'line', data: all_data_sets, options: chart_options });
  }

}
