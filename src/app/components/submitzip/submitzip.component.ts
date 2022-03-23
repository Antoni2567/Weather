import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetcoordService } from 'src/app/services/getcoord.service';

@Component({
  selector: 'app-submitzip',
  templateUrl: './submitzip.component.html',
  styleUrls: ['./submitzip.component.css']
})
export class SubmitzipComponent implements OnInit {

  constructor(private serviceinfo:GetcoordService, private router:Router) { }

  ngOnInit(): void {
  }

  
  onsubmit(zipform: any) {
    console.log(zipform.value.zipcode)
    this.serviceinfo.getzipnum(zipform.value.zipcode)
    setTimeout(() => {
      this.router.navigate(['/'])
    },3000)

  }

}
