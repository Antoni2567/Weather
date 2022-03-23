import { Component, OnInit } from '@angular/core';
import {DataService} from 'src/app/services/data.service';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
weather: any[] = [];
today: any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getWeatherData().subscribe(data => {this.today = data.hourly})
  }

}
