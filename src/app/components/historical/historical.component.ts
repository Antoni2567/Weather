import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { GetcoordService } from 'src/app/services/getcoord.service';
import { GetcurrentdayService } from 'src/app/services/getcurrentday.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {
  r1: any
  r2: any
  r3: any
  r4: any
  r5: any
  city: any

  constructor(private data:GetcurrentdayService, private location:GetcoordService) { }

  ngOnInit(): void {

    this.location.getlocation().pipe(
      switchMap(coords => {
        this.city = coords.name
        return this.data.getHistorical(coords.lat,coords.lon)
      })).subscribe(responseList => {
        this.r1 = responseList[0].current;
        this.r2 = responseList[1].current;
        this.r3 = responseList[2].current;
        this.r4 = responseList[3].current;
        this.r5 = responseList[4].current;
        })


  }

}
