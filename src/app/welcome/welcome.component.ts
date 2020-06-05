import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  clickLogin(event){
      event.preventDefault();
      this.router.navigate(['/login'], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
