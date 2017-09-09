import { SharedModule } from './../shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    FormsModule
  ],
  declarations: [SignInComponent],
  providers: []
})
export class AuthenticationModule {}
