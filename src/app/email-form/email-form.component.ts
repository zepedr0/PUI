import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Email } from '../interfaces/email';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {

  constructor(private emailService: EmailService,
    private router: Router) { }

  email!: Email;

  ngOnInit(): void {
    this.email = { 
      from: '',
      to: '',
      subject: '',
      body: '',
    };
  }

  create(): void {
    this.emailService.addEmail(this.email);
    window.alert("Email created");
    this.router.navigate(['emailsList', {}]);
  }
}
