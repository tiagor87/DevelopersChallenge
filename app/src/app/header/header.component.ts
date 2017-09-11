import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AuthenticationService } from './../shared/authentication.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'nibo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  auth: any;
  private authSubscription: Subscription;
  constructor(
    private authentionService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.auth = this.authentionService.getAuth();
    this.authentionService.authChanged.subscribe(auth => (this.auth = auth));
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  signOut() {
    this.authentionService
      .signOut()
      .subscribe(() => this.router.navigate(['/']));
  }
}
