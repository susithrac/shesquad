import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl} from '@angular/forms';

import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatDatepicker} from '@angular/material/datepicker';
import {MatBottomSheet} from "@angular/material";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

showBookingPage : boolean =false;

todayNumber: number = Date.now();
  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();


  constructor(public snackBar: MatSnackBar) { }
  openSnackBar() {
    this.snackBar.open("Booking Successfully Submitted.", "close", {
      duration: 2000,
    });
  }

  ngOnInit() {
  }

showBookingFun():void{
  this.showBookingPage = !this.showBookingPage
}

}
