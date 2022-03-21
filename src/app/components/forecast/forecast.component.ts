import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  daily: any[] = []
  weather: any[] = []

  constructor(private weatherdata:DataService) { }

  ngOnInit(): void {
    this.weatherdata.getForecast().subscribe(data => {
      this.daily = data.daily
    })
  }

  



}
