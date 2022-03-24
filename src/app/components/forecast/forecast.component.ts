import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { GetcoordService } from 'src/app/services/getcoord.service';
import { SubmitzipComponent } from '../submitzip/submitzip.component';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  daily: any[] = []
  weather: any[] = []
  city: any

  constructor(private weatherdata:DataService, private location:GetcoordService, private zip:SubmitzipComponent) { }

  ngOnInit(): void {
    this.location.getlocation().pipe(
      switchMap(coords => {
        this.city = coords.name
        return this.weatherdata.getWeatherData(coords.lat,coords.lon)
      })).subscribe(data => {
        this.daily = data.daily
      })
          
  }

}
