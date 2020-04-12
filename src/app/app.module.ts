import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RepoComponent } from './repo/repo.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRequestService } from '../app/profileService/profile-request.service'
import { HttpClientModule } from '@angular/common/http';
import { DateCountPipe } from './date-count.pipe';
import { LatestRepoDirective } from './latest-repo.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepoComponent,
    ProfileComponent,
    DateCountPipe,
    LatestRepoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfileRequestService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
