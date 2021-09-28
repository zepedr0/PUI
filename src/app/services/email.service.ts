import { Injectable } from '@angular/core';

import { Email } from '../interfaces/email';
import { EmailWithId } from '../interfaces/emailWithId';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emails : EmailWithId[];
  private lastId : number;

  constructor() { 
    this.emails = [{
      from: 'me',
      to: 'you',
      subject: 'Hi',
      body: 'How are you?',
      id: 0,
    }];
    this.lastId = 1;
  }

  getAllEmails() : EmailWithId[] {
    return this.emails;
  }

  getEmailById(id: number) : EmailWithId | undefined {
    return this.emails.find(e => e.id == id);
  }

  addEmail(email: Email) : void {
    const newEmail : EmailWithId = { ...email, id: this.lastId};
    this.emails.push(newEmail);
    this.lastId++;
  }

  removeEmailById(id: number) : void {
    this.emails = this.emails.filter(e => e.id !== id);
  }
}
