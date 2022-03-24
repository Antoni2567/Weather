import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { GetcoordService } from '../services/getcoord.service';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
weather: any[] = [];
today: any[] = [];
city: any;
  constructor(private dataService: DataService, private location:GetcoordService) { }

  ngOnInit(): void {
    /**this.dataService.getWeatherData().subscribe(data => {this.today = data.hourly}) */
  
  this.location.getlocation().pipe(switchMap(coords => {this.city = coords.name
    return this.dataService.getWeatherData(coords.lat,coords.lon)})).subscribe(data => {this.today = data.hourly})
  }
}

