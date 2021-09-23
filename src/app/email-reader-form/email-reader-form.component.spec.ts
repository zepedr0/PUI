import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailReaderFormComponent } from './email-reader-form.component';

describe('EmailReaderFormComponent', () => {
  let component: EmailReaderFormComponent;
  let fixture: ComponentFixture<EmailReaderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailReaderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailReaderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
