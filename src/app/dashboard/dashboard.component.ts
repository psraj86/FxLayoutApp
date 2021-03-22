import { BillDue } from './type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
@Input() deviceXs: boolean;
internetTvBill: BillDue;
mobileBill: BillDue;
notification: BillDue = {
  title:'Notifications',
  data:[{
    icon:'info',
    title:'Activation Failed',
    subTitle:'One Device'
  },{
    icon:'warning',
    title:'Reduced Data Speed',
    subTitle:'One Device'
  },{
    icon:'play_arrow',
    title:'Ready To Activate',
    subTitle:'Multiple Devices(3)'
  },{
    icon:'autorenew',
    title:'Activation in Progress',
    subTitle:'One Device'
  }]
}
  constructor() { }

  ngOnInit(): void {
    this.internetTvBill = {
      title: 'Internet + TV Bill',
      due: '$258.09',
      description:'Payment Due by',
      dueDate: 'Nov 6'
    }
    this.mobileBill = {
      title: 'Mobile Bill',
      due: '$258.09',
      description:'You\'re all set! Your Auto Pay is scheduled for',
      dueDate: 'Nov 16'
    }
  }

}
