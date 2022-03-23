import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    return this.http.get<any>('https://api.openweathermap.org/data/2.5/onecall?lat=32.44&lon=-93.04&units=imperial&exclude=minutely,daily&appid=93c9227aceb12421211cb7e287943d9b')
  }
}
