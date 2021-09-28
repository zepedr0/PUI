import { Component, OnInit } from '@angular/core';

import { EmailService } from '../services/email.service';
import { EmailWithId } from '../interfaces/emailWithId';

@Component({
  selector: 'app-emails-list',
  templateUrl: './emails-list.component.html',
  styleUrls: ['./emails-list.component.css']
})
export class EmailsListComponent implements OnInit {

  emails!: EmailWithId[];
  textFilter!: string;

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
    this.emails = this.emailService.getAllEmails(); 
    this.textFilter = '';
  }

  delete(id: number): void {
    this.emailService.removeEmailById(id);
    this.emails = this.emailService.getAllEmails();
  }
}
