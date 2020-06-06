import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Desk } from '../booking.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  showBookingPage: boolean = false;
  isSeatSelected: boolean = true;
  selectedDesk: Desk;
  userName: string;
  todayDate: string;
  minDate: Date;
  maxDate: Date;

  constructor(public snackBar: MatSnackBar,
    private route: ActivatedRoute) {
    this.userName = route.snapshot.paramMap.get('id');
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear, currentMonth, currentDate+6);
  }

  retrieveFloors() {
    this.trigger.openMenu();
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

  releaseBooking():void {
    this.showBookingPage = false;
    this.isSeatSelected = true;
  }

  seatHandler(data: Desk) {
    this.isSeatSelected = false;
    this.todayDate = moment(new Date()).format('MM/DD/YYYY');

    this.selectedDesk = data;
    console.log("Got the data");
    console.log(data);
  }

}
