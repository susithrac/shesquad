import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Desk } from '../booking.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  showBookingPage: boolean = false;
  disableBookNowButton: boolean = true;
  selectedDesk: Desk;
  userName: string;
  todayDate: string;

  constructor(public snackBar: MatSnackBar,
    private route: ActivatedRoute) {
    this.userName = route.snapshot.paramMap.get('id');
  }

  openSnackBar() {
    this.snackBar.open("Booking Successfully Submitted.", "close", {
      duration: 2000,
    });
  }
  desks: Array<Desk>;
  ngOnInit() {
    this.desks = this.route.snapshot.data['desks'];
  }

  showBookingFun(): void {
    this.showBookingPage = !this.showBookingPage;

  }

  seatHandler(data: Desk) {
    this.disableBookNowButton = false;
    this.todayDate = moment(new Date()).format('MM/DD/YYYY');

    this.selectedDesk = data;
    console.log("Got the data");
    console.log(data);
  }

}
