import { AfterViewInit, Component } from '@angular/core';
import { Chart } from 'chart.js'
import {ALL_REG_LIST, ALL_REGION_DET} from "../model/mock-regions";

@Component({
  selector: 'app-compare-chart',
  templateUrl: './compare-chart.component.html',
  styleUrls: ['./compare-chart.component.css']
})
export class CompareChartComponent implements AfterViewInit {

  constructor() { }

  chart = [];
  all_regions_detail = ALL_REGION_DET;
  MONTHS =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  years = Object.keys(this.all_regions_detail["UK"]);
  weather_conditions=['maxT', 'minT', 'meanT']
  compare_year: string;
  compare_data: string;

  ngAfterViewInit(){
    this.refreshCompareChart([],[],[],[]);
  }

  onYearChange(){
    let uk_data = this.all_regions_detail['UK'][this.compare_year][this.compare_data];
    let en_data = this.all_regions_detail['England'][this.compare_year][this.compare_data];
    let wa_data = this.all_regions_detail['Wales'][this.compare_year][this.compare_data];
    let sc_data = this.all_regions_detail['Scotland'][this.compare_year][this.compare_data];
    console.log(uk_data);
    this.refreshCompareChart(uk_data,en_data, wa_data, sc_data);
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
