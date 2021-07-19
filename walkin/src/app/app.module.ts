import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WalkinmainpageComponent } from './walkinmainpage/walkinmainpage.component';
import { LoginComponent } from './login/login.component';
import { WalkindetailspageComponent } from './walkindetailspage/walkindetailspage.component';
import { TimeslotandprefComponent } from './timeslotandpref/timeslotandpref.component';
import { RoledetailsComponent } from './roledetails/roledetails.component';
import { PrereqComponent } from './prereq/prereq.component';
import { RegistrationModule } from './registration/registration.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WalkinmainpageComponent,
    LoginComponent,
    WalkindetailspageComponent,
    TimeslotandprefComponent,
    RoledetailsComponent,
    PrereqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RegistrationModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
