import { Routes, ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './../../shared/authentication.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'nibo-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(
    private auhtenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  signIn(form: NgForm) {
    console.log(form.value);
    this.auhtenticationService
      .signIn(form.value.email, form.value.password)
      .subscribe(() => this.router.navigate(['/admin']));
  }
}
