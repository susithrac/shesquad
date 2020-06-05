import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface Desk {
  deskNo: string,
  deskId: string,
  floorNo : string,
  departmentName: string,
  availableForBooking: boolean
}
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpClient: HttpClient) { }

  getDesks(): Observable<Array<Desk>>{
    return this.httpClient.get(environment.url+'/desks') as Observable<Array<Desk>>;
  }

}
