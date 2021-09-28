import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailReaderBasicComponent } from './email-reader-basic/email-reader-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BackgroundDirective } from './directives/background.directive';
import { EmailReaderFormComponent } from './email-reader-form/email-reader-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { WithBodyFilterPipe } from './pipes/withbody-filter.pipe';
import { EmailsListComponent } from './emails-list/emails-list.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailReaderBasicComponent,
    BackgroundDirective,
    EmailReaderFormComponent,
    WithBodyFilterPipe,
    EmailsListComponent,
    EmailFormComponent,
    EmailViewerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Ng2SearchPipeModule, 
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
