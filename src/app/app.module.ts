import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './ui/projects/projects.component';
import { AboutComponent } from './ui/about/about.component';
import { ContactUsComponent } from './ui/contact-us/contact-us.component';
import { TeamComponent } from './ui/team/team.component';
import { ProjectCardComponent } from './ui/projects/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    AboutComponent,
    ContactUsComponent,
    TeamComponent,
    ProjectCardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxSkeletonLoaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
