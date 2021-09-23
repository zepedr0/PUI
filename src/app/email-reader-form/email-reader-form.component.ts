import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-form',
  templateUrl: './email-reader-form.component.html',
  styleUrls: ['./email-reader-form.component.css']
})
export class EmailReaderFormComponent implements OnInit {

  email: Email;
  emailsList: Email[];
  textFilter: string;
  withBody: boolean;

  @ViewChild('emailForm') emailForm: any;

  constructor() {
    this.email = { 
      from: '',
      to: '',
      subject: '',
      body: '',
    };
    this.emailsList = [];
    this.textFilter = '';
    this.withBody = false;
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.emailsList.push(this.email);
    this.email = { 
      from: '',
      to: '',
      subject: '',
      body: '',
    };
  }

  reset(): void {
    this.emailForm.reset();
  }
}
