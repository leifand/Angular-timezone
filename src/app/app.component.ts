import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zones';
  time = Date.now();
  current_zone = 0;

  getStyle(key: number) {
    if(key == this.current_zone && key !=0) return { 'background-color':'green' };
    return { 'background-color':'white' };
  }

  setTimeZone(key: number) { // hardcoded for Dallas
    let offset = 0;
    if(key == 1) offset = 3600000;
    else if(key==2) offset = 0;
    else if(key==3) offset = -3600000;
    else if(key==4) offset = -7200000;
    this.time = Date.now() + offset;
    this.current_zone = key;
  }
}
