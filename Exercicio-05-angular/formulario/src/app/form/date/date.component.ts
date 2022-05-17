import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent {

  DateForm = this.fb.group({
    birthDay: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {
  }

}
