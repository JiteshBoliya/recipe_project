import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  islogin = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onSwitchmode() {
    this.islogin = !this.islogin;
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    form.reset();
    const email = form.value.email;
    const password = form.value.password;
    if (this.islogin) {
      this.authService.signup(email, password).subscribe((resData) => {
        console.log(resData);
      });
    }
  }
}
