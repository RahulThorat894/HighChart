import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DataService } from '../Service/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-high-chart',
  templateUrl: './high-chart.component.html',
  styleUrls: ['./high-chart.component.css']
})
export class HighChartComponent {
userlist:any;
constructor(private http:DataService){

  this.http.getData().subscribe(res => {
this.userlist=res;
// console.log(this.userlist);
  })
}

  lineChart=new Chart({
      
    chart: {
      type: 'line'
    },
    title: {
      text: 'User Analytics'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Monthly Profit',
        data: [10, 2, 3,6,9,17]
      } as any
    ]
  });

  fromvalue=new FormGroup({
    Coustmer:new FormControl(''),
    Date:new FormControl(''),
    Amont:new FormControl(''),
    Status:new FormControl('')


  })
  postData(data:any)
  {
    this.http.postData(this.fromvalue.value).subscribe(res => {

    })
  }
}
