import { Resolve } from '@angular/router';
import { BookingService } from './booking.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BookingResolver implements Resolve<any>{

    constructor(private bookingService: BookingService) { }
    resolve() {
        return this.bookingService.getDesks();
    }

}