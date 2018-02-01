import {AfterViewInit, Component} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-climate-chart',
  templateUrl: './climate-chart.component.html',
  styleUrls: ['./climate-chart.component.css']
})
export class ClimateChartComponent implements  AfterViewInit{
  chart = []
  constructor() { }

  ngAfterViewInit(){
    //start test code
    let time_series = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let climate_maxT = [5.4, 6.8, 9.1, 9.8, 14.4, 17.7, 17.0 , 17.7, 15.6  , 12.8 , 5.9, 7.7 ];
    let climate_minT = [-0.3, 0.9, 1.5, 2.2, 5.6, 8.8, 9.3, 10.4, 7.7, 6.7, -0.3, 3.1];
    let climate_meanT = [2.6, 3.9, 5.4, 6.0, 10.1, 13.3, 13.2, 14.1, 11.8, 9.9, 2.8, 5.5];
    let all_data_sets= {
      labels: time_series,
      // Start dataset
      datasets:[
        {
          label: "Min",
          fill: true,
          backgroundColor: "rgba(0, 191, 255, 0.2)",
          borderColor: "#29b6f6",
          data:climate_minT},
        {
          label: "Mean",
          fill:false,
          backgroundColor: "#424242",
          borderColor: "#424242",
          data:climate_meanT},
        {
          label: "Max",
          fill: true,
          backgroundColor: "rgba(255, 209, 128,0.2)",
          borderColor: "#ffd180",
          data:climate_maxT}]
    };
    let chart_options ={
      responsive: true,
      title:{
        display:true,
        text:'Chart.js Line Chart'},
      tooltips: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'point',
        intersect: true
      },
      scales: {
        xAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Months of 1910'
          }}],
        yAxes: [{
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Temperature °C'
          }}]
      }
    };
    this.chart = new Chart('weather-chart', { type: 'line', data: all_data_sets, options: chart_options });
  }

}
