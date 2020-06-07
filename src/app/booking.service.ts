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

  profileData:any;

  constructor(private httpClient: HttpClient) { }

  getDesks(): Observable<Array<Desk>>{
    return this.httpClient.get(environment.url+'/desks') as Observable<Array<Desk>>;
  }
  manageBooking(obj): Observable<any>{
    return this.httpClient.post(environment.url+'/booking',obj);
  }


  setProfileDetails(data){
    this.profileData=data;
  }
  getProfileDetails():any{
    return this.profileData
  }

}
