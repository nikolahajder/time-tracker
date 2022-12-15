import { Component } from '@angular/core';


@Component({
  selector: 'app-time-tracker',
  templateUrl: './time-tracker.component.html',
  styleUrls: ['./time-tracker.component.css']
})
export class TimeTrackerComponent {
  hours: number;
  minutes: number;
  zone: string;
  isOpen: boolean;
  isOpenMinutes: boolean;
  time: string;
  showTime: boolean;
  showError: boolean;
  allHours: number[];
  allMinutes: number[];

  constructor () {
    this.hours = 12;
    this.minutes = 30;
    this.zone = 'AM';
    this.isOpen = false;
    this.isOpenMinutes = false;
    this.allHours = [];
    this.allMinutes = [];
    this.time = '';
    this.showTime = false;
    this.showError = false;
    this.defaultHoursMinutes();
  }

  defaultHoursMinutes() {
    for (let i = 0; i <= 60; i++) {
      this.allMinutes.push(i);
    }
    for (let i = 0; i <= 12; i++) {
      this.allHours.push(i);
    }
  }

  setHours(hour: number) {
    this.hours = hour;
  }

  setMinutes(min: number) {
    this.minutes = min;
  }

  setZone() {
    this.zone === 'AM' ? this.zone = 'PM' : this.zone = 'AM';
  }

  setTime(){
    this.showError = false;
    this.showTime = false;
    let min;
    this.minutes < 10 ? min = '0' + this.minutes : min = this.minutes;
    
    this.time = this.hours +':'+ min + ' ' + this.zone;
    if (this.hours <= 12 && this.hours >= 0 && this.minutes >= 0 && this.minutes < 60 ){
      this.showTime = true;
    } else {
      this.showError = true;
    }
  }
}
