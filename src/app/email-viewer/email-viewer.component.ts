import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EmailService } from '../services/email.service';
import { EmailWithId } from '../interfaces/emailWithId';

@Component({
  selector: 'app-email-viewer',
  templateUrl: './email-viewer.component.html',
  styleUrls: ['./email-viewer.component.css']
})
export class EmailViewerComponent implements OnInit {

  constructor(private emailService: EmailService,
    private route: ActivatedRoute,
    ) { }

  email!: EmailWithId | undefined;

  ngOnInit(): void {
    const emailId = this.route.snapshot.paramMap.get('paramvalue');
    if (emailId !== null)
      this.email = this.emailService.getEmailById(Number.parseInt(emailId));
    else
      this.email = undefined;
  }

}
