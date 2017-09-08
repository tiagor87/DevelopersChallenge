import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthenticationService } from './authentication.service';

@NgModule({
  imports: [CommonModule, AuthenticationRoutingModule],
  declarations: [SignInComponent],
  providers: [AuthenticationService]
})
export class AuthenticationModule {}
