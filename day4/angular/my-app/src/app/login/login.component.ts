import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: any = '';
  pass: any = '';
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(this.email + ' password -' + this.pass);
  }
  registeredUser() {
    let { email, pass } = this;

    if (email == 'ssss' && pass == 'ssss') {
      console.log(email + ' password -' + pass);
      this.router.navigate(['/dashboard']);
    } else {
      alert('invalid login');
    }
  }
}
