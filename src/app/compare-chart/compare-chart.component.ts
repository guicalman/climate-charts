import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-compare-chart',
  templateUrl: './compare-chart.component.html',
  styleUrls: ['./compare-chart.component.css']
})
export class CompareChartComponent implements AfterViewInit {

  constructor() { }

  chart = [];

  ngAfterViewInit(){
    //start test code
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let UK = [6.8, 8.2, 9.4, 10.1, 14.6, 17.5, 16.5, 16.4, 15.8, 13.4, 9.5, 6.1 ];
    let England = [7.7, 8.9, 10.8, 11.1, 16.0, 18.7, 17.7, 17.5, 17.1, 14.2, 9.7, 6.5];
    let Wales = [7.6, 8.4, 9.3, 10.0, 14.2, 17.3, 16.0, 16.1, 15.8, 13.3, 9.7, 6.4];
    let Scotland= [5.0, 6.9, 7.3, 8.4, 12.4, 15.9, 14.8, 14.8, 13.8, 12.0, 8.8, 5.2];
    let all_data_sets= {
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
