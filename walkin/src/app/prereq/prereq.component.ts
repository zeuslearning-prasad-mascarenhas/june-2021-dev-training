import { Component, OnInit } from '@angular/core';
import predata from '../../json/prereq.json';
interface Predata {
  generalins: String[];
  examins: String[];
  sysins: String[];
  process: { round: String; name: String }[];
}
@Component({
  selector: 'app-prereq',
  templateUrl: './prereq.component.html',
  styleUrls: ['./prereq.component.scss'],
})
export class PrereqComponent implements OnInit {
  check: boolean = true;
  src: String = `expand_more_black_24dp.svg`;
  predata: Predata = predata;
  constructor() {}

  ngOnInit(): void {
    console.log(predata);
  }
  checker() {
    if (this.check) {
      this.src = `expand_more_black_24dp.svg`;
    } else {
      this.src = `expand_less_black_24dp.svg`;
    }
    this.check = !this.check;
  }
}
