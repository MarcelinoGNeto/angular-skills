import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { MatProgressSpinner } from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  isWait: boolean = false;
  cols: number;
  cards: Array<any>;

  constructor(private httpClient: HttpClient, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.isWait = true;
    this.httpClient.get('/api/skills').subscribe((ret: Array<any>) => {
      this.isWait = false 
      this.cards = ret
    });

    this.breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe(state => {
        if (state.matches) {
          this.cols = 2;
        } else {
          this.cols = 1;
        }
      });
  }
}
