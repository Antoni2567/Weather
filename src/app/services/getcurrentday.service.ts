import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetcurrentdayService {

  constructor(private http:HttpClient) { }


  n1(number:number): number[] {
    let times: number[] = []
    for(let i =1; i < 6; i++) {
      times.push(number-86400*i)
    }
    return times
  }
  timestamps: number[] = this.n1(Math.trunc(Date.now()/1000))

  getHistorical(): Observable<any> {
    let r1 = this.http.get<any>(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=33.44&lon=-94.04&dt=${this.timestamps[0]}&appid=74d62568b872fcbad2e47bc0c718890b`)
    let r2 = this.http.get<any>(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=33.44&lon=-94.04&dt=${this.timestamps[1]}&appid=74d62568b872fcbad2e47bc0c718890b`)
    let r3 = this.http.get<any>(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=33.44&lon=-94.04&dt=${this.timestamps[2]}&appid=74d62568b872fcbad2e47bc0c718890b`)
    let r4 = this.http.get<any>(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=33.44&lon=-94.04&dt=${this.timestamps[3]}&appid=74d62568b872fcbad2e47bc0c718890b`)
    let r5 = this.http.get<any>(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=33.44&lon=-94.04&dt=${this.timestamps[4]}&appid=74d62568b872fcbad2e47bc0c718890b`)
    return forkJoin([r1,r2,r3,r4,r5])
  }


}
