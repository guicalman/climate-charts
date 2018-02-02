import {AfterViewInit, Component} from '@angular/core';
import { Chart } from 'chart.js';
import { ALL_REG_LIST, ALL_REGION_DET, chart_options } from "../model/mock-regions";
import {log} from "util";

@Component({
  selector: 'app-climate-chart',
  templateUrl: './climate-chart.component.html',
  styleUrls: ['./climate-chart.component.css']
})
export class ClimateChartComponent implements  AfterViewInit{
  chart = [];
  all_regions_detail=ALL_REGION_DET;
  MONTHS =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  region_list = ALL_REG_LIST;
  selected_region: string;
  maxT=[];
  minT=[];
  meanT=[];
  years = [];
  selected_year: string;
  constructor() { }

  ngAfterViewInit(){
    this.refreshClimateChart();
  }

  onRegionChange(): void{
    let temp_region =this.all_regions_detail[this.selected_region];
    this.years = Object.keys(temp_region);
    this.refreshClimateChart();
  }
  onYearChange(): void{
    let temp_region =this.all_regions_detail[this.selected_region];
    let t_values=temp_region[this.selected_year];
    console.log(t_values);
    this.maxT = t_values['maxT'];
    this.minT = t_values['minT'];
    this.meanT = t_values['meanT'];
    this.refreshClimateChart();
  }

  refreshClimateChart(){
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
          data: this.minT
        },
        {
          label: "Mean",
          fill:false,
          backgroundColor: "#424242",
          borderColor: "#424242",
          data: this.meanT
        },
        {
          label: "Max",
          fill: true,
          backgroundColor: "rgba(255, 209, 128,0.2)",
          borderColor: "#ffd180",
          data: this.maxT
        }]
    };

    this.chart = new Chart('weather-chart', { type: 'line', data: all_data_sets, options: chart_options });
  }

}
