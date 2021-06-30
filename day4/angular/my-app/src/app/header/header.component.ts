import { Component, OnInit } from '@angular/core';
import data from '../../json/alert.json';
import data2 from '../../json/notify.json';

interface Alertdata {
  title: String;
  image: String;
  color: String;
  course: boolean;
  coursecontent: String;
  date: String;
}
interface NotifyData {
  title: String;
  content: String;
  img: String;
  course: String;
  attached: String;
  date: String;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  alertjson: Alertdata[] = data;
  notifyjson: NotifyData[] = data2;
  alertsize: any = data.length;
  notifysize: any = data2.length;
  constructor() {}

  ngOnInit(): void {}

  show: any = function (elem: any) {
    let temp = document.getElementById(elem.id)!;
    console.log(data);
    temp.style.visibility = 'visible';
  };

  hide: any = function (elem: any) {
    let temp2 = document.getElementById(elem.id)!;
    temp2.style.visibility = 'hidden';
  };
  opensuboption: any = (elem: any) => {
    let temp = document.getElementById(elem.id)!;
    let parent = temp.parentElement!;
    if (temp.style.display !== 'block') {
      temp.style.display = 'block';
      parent.style.cssText = 'padding-bottom:0;background-color:#F3F3F3';
    } else {
      temp.style.display = 'none';
      parent.style.cssText = 'padding-bottom:16px;background-color:inherit';
    }
  };
}
