import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
message:  any[] = [];
messenger:  any[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getWeatherData().subscribe(data => {this.message= data.alerts})
  }

}
