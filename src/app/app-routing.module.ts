import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RepoComponent } from './repo/repo.component'


const routes: Routes = [
  { path: 'profile', component: ProfileComponent},
  { path: 'repo', component: RepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
