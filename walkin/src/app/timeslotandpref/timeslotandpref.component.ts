import { Component, OnInit } from '@angular/core';
import data from '../../json/timeandpref.json';
interface timeandslot {
  time: String[];
  preference: String[];
}
@Component({
  selector: 'app-timeslotandpref',
  templateUrl: './timeslotandpref.component.html',
  styleUrls: ['./timeslotandpref.component.scss'],
})
export class TimeslotandprefComponent implements OnInit {
  timeandslot: timeandslot = data;
  constructor() {
    console.log(this.timeandslot.time);
  }

  ngOnInit(): void {}
}
