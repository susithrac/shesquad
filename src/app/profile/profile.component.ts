import {FlatTreeControl} from '@angular/cdk/tree';
import {Component,OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';


interface FoodNode {
  name: String;
  children?: FoodNode[];
}


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  todayDate : Date = new Date();
  todayString : string = new Date().toDateString();
  todayISOString : string = new Date().toISOString();
  panelOpenState = false;
  obj : any;
  username : String;
  deptname : String;
  email : String;
  floor : String;
  dept : String;
  seatno : String;
  bookedOn : String;
  duration : String;

  ngOnInit() {
    console.log(this.bookingService.getProfileDetails());
  }

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor( private route: ActivatedRoute, private bookingService: BookingService) {
     this.obj = bookingService.getProfileDetails();
     this.username = bookingService.getProfileDetails().userName;
     this.deptname = bookingService.getProfileDetails().selectedDesk.departmentName;
     this.email = bookingService.getProfileDetails().emailId;
     this.floor = bookingService.getProfileDetails().selectedDesk.floorNo;
     this.dept = bookingService.getProfileDetails().selectedDesk.departmentName;
     this.seatno = bookingService.getProfileDetails().selectedDesk.deskNo;
     this.bookedOn = bookingService.getProfileDetails().bookingObject.booking.createdDateTime;
    this.duration = bookingService.getProfileDetails().bookingObject.booking.durationID;

     const TREE_DATA: FoodNode[] = [
      {
        name: 'Seat Details',
        children: [
          {name: 'Floor : '+this.floor},
          {name: 'Department : ' + this.dept},
          {name: 'Seat Number : '+ this.seatno},
          {name: 'Booked On : '+ this.bookedOn},
         {name: 'Duration : '+ this.duration+'ay'},
        ]
      }
    ];
    

    this.dataSource.data = TREE_DATA;
    
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}



