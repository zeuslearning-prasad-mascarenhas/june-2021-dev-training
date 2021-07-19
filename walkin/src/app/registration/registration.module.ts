import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistermainComponent } from './registermain/registermain.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { PersonalpageComponent } from './personalpage/personalpage.component';
import { QualifypageComponent } from './qualifypage/qualifypage.component';
import { ReviewpageComponent } from './reviewpage/reviewpage.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RegistermainComponent,
    ProgressbarComponent,
    PersonalpageComponent,
    QualifypageComponent,
    ReviewpageComponent,
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
  exports: [
    RegistermainComponent,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
  ],
})
export class RegistrationModule {}
