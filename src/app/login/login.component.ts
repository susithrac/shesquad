import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService) { }
  submitHandler(form){
      event.preventDefault();
      let encryptedPassword = CryptoJS.AES.encrypt(form.password, 'secret key 123').toString();
      this.loginService.validateUser(form.email, encryptedPassword).subscribe(function(response){
        console.log(response);
      });

      this.router.navigate(['/home'], { relativeTo: this.route });
  }

  ngOnInit() {
  }

}
