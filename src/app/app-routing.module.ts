import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailsListComponent } from './emails-list/emails-list.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmailViewerComponent } from './email-viewer/email-viewer.component';

const routes: Routes = [
  { path: '', redirectTo: '/emailsList', pathMatch: 'full' },
  { path: 'emailsList', component: EmailsListComponent }, 
  { path: 'emailForm', component: EmailFormComponent }, 
  { path: 'emailViewer/:paramvalue', component: EmailViewerComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
