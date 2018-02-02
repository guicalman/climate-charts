import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { ClimateChartComponent } from './climate-chart/climate-chart.component';
import { CompareChartComponent } from './compare-chart/compare-chart.component';
import {HttpClientModule} from "@angular/common/http";
import {ClimateService} from "./climate.service";


@NgModule({
  declarations: [
    AppComponent,
    ClimateChartComponent,
    CompareChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ClimateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
