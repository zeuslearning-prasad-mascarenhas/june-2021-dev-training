import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-personalpage',
  templateUrl: './personalpage.component.html',
  styleUrls: ['./personalpage.component.scss'],
})
export class PersonalpageComponent implements OnInit {
  hide = true;
  constructor(fb: FormBuilder) {
    this.jobRole = fb.group({
      instructional_designer: false,
      software_engineer: false,
      software_quality_engineer: false,
    });
  }

  ngOnInit(): void {}
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  jobRole: FormGroup;
}
