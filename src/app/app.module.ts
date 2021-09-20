import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackgroundDirective } from './directives/background.directive';

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
