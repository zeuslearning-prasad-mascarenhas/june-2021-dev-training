import { Component, OnInit } from '@angular/core';
import roledata from '../../json/roledetail.json';
interface Roledata {
  title: String;
  package: String;
  roledesription: String[];
  requirment: String[];
}
@Component({
  selector: 'app-roledetails',
  templateUrl: './roledetails.component.html',
  styleUrls: ['./roledetails.component.scss'],
})
export class RoledetailsComponent implements OnInit {
  check: number = -1;
  src: String = `../../assets/img/expand_more_black_24dp.svg`;
  roledata: Roledata[] = roledata;
  constructor() {}

  ngOnInit(): void {}
  checker(ev: any) {
    if (this.check === ev) {
      this.check = -1;
    } else {
      this.check = ev;
    }
    console.log(this.check);
  }
}
