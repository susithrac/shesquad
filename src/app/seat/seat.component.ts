import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Desk } from '../booking.service';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {

  @Input()
  desk:Desk;

  @Output()
  seatSelect: EventEmitter<Desk>;
  constructor() { 
    this.seatSelect = new EventEmitter<Desk>();
  }

  ngOnInit() {
  }

  changeHandler(seat: Desk){
    this.seatSelect.emit(seat);
  }

}
