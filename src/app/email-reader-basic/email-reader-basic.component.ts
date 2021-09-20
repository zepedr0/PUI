import { Component, OnInit } from '@angular/core';

import { Email } from '../interfaces/email';

@Component({
  selector: 'app-email-reader-basic',
  templateUrl: './email-reader-basic.component.html',
  styleUrls: ['./email-reader-basic.component.css']
})
export class EmailReaderBasicComponent implements OnInit {

  email!: Email;

  constructor() { }

  ngOnInit(): void {
    this.clean();
  }

  send (): void {
    window.alert(`The email ${this.email.subject} to ${this.email.to} has been sent.`);
  }

  clean (): void {
    this.email = { 
      from: 'jp.maia@alumnos.upm.es',
      to: '',
      subject: '',
      body: '',
    };
  }
}
