import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Desk } from '../booking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  showBookingPage: boolean = false;

  todayNumber: number = Date.now();
  todayDate: Date = new Date();
  todayString: string = new Date().toDateString();
  todayISOString: string = new Date().toISOString();


  constructor(public snackBar: MatSnackBar, 
    private route: ActivatedRoute) { 
    
  }
 
  openSnackBar() {
    this.snackBar.open("Booking Successfully Submitted.", "close", {
      duration: 2000,
    });
  }
  desks:Array<Desk>;
  ngOnInit() {
    this.desks = this.route.snapshot.data['desks'];
  }

  showBookingFun(): void {
    this.showBookingPage = !this.showBookingPage
  }

  seatHandler(data:Desk){
    console.log("Got the data");
    console.log(data);
  }

}
