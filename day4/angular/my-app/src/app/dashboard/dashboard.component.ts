import { Component, OnInit } from '@angular/core';
import data from '../../json/dash.json';
interface Dashdata {
  title: String;
  image: String;
  fav: boolean;
  subjectsection: {
    subject: String;
    grade: String;
    plus: String;
  };
  unitsection: {
    istrue: boolean;
    unit: String;
    lesson: String;
    topic: String;
  };
  dropdown: {
    istrue: boolean;
    dropcontent: String[];
    student: String;
    date: String;
  };
  option: {
    image1: boolean;
    image2: boolean;
    image3: boolean;
    image4: boolean;
  };
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  dashdata: Dashdata[] = data;
  constructor() {}

  ngOnInit(): void {}
}
