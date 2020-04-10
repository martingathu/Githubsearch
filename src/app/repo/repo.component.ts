import { Component, OnInit } from '@angular/core';
import { ProfileRequestService } from '../profileService/profile-request.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repoitems: any[];
  repoName:string= "akan";

  constructor( private profileService:ProfileRequestService) { 
    
  }

  findRepo() {
    this.profileService.UpdateRepo(this.repoName);
    this.profileService.searchrepos().subscribe(repo => {
      // console.log(repo["items"]);
      this.repoitems = repo["items"];
      console.log(this.repoitems);
    })
  }

  ngOnInit() {
    this.findRepo()
  }

}