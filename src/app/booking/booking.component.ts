import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Desk, BookingService } from '../booking.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { MatMenuTrigger } from '@angular/material';
import { Router } from '@angular/router';
import * as _ from 'underscore';

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
  employeeId: string;
  dateValue: any;
  floorValue:any;
  emailId:string;
  dept:string;
  floorNumber:string;

  constructor(public snackBar: MatSnackBar,
    private route: ActivatedRoute, private bookingService:BookingService,private router: Router) {
    this.userName = route.snapshot.paramMap.get('id');
    this.employeeId = route.snapshot.paramMap.get('empId');
    this.emailId = route.snapshot.paramMap.get('email');

    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.maxDate = new Date(currentYear, currentMonth, currentDate+1);
  }

  retrieveFloors() {
    this.trigger.openMenu();
  }

  onSubmit() {
    let bookObj={"booking":{
      "bookingDate": "10/06/2020",
      "durationID": "1D",
      "bookedByID": this.employeeId,
      "deskID": this.selectedDesk.deskId,
      "createdDateTime": this.todayDate
    }};
    this.bookingService.manageBooking(bookObj).subscribe(data=>{

      let snackBarRef = this.snackBar.open("Booking Successfully Submitted.", "close", {
        duration: 5000,
      });
      snackBarRef.afterDismissed().subscribe(() => {
       // this.router.navigate(['/home/booking',{id:this.userName,empId:this.employeeId}], { relativeTo: this.route , skipLocationChange: true });
        this.bookingService.getDesks().subscribe(data=>{
          this.desks = _.sortBy(data,'deskId');
          this.showBookingFun();
          let profileObject={userName: this.userName, 
            emailId: this.emailId, 
            selectedDesk: this.selectedDesk,
            bookingObject:bookObj
          };
          this.bookingService.setProfileDetails(profileObject);

        });
        this.floorValue="";
        this.dateValue="";
      });
    });
  }

  desks: Array<Desk>;
  ngOnInit() {
    var desks = this.route.snapshot.data['desks'];
    this.desks = _.sortBy(desks,'deskId');
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
  selectedDate(date){
    console.log(date);
  }

  
}
