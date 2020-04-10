import { Component, OnInit } from '@angular/core';
import { ProfileRequestService } from '../profileService/profile-request.service'



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
  
})
export class ProfileComponent implements OnInit {
  profile: any;
  repos: any;
  username: any = 'martingathu'

  constructor( private profileService:ProfileRequestService) { 
    
  }
  findProfile(){
    this.profileService.updateProfile(this.username);

    this.profileService.getProfileInfor().subscribe(profile =>{
      console.log(profile);
    this.profile= profile      
    });

    this.profileService.getProfileRepos().subscribe(repos =>{
      console.log(repos);
    this.repos= repos;      
    
    })
  }

  ngOnInit(){
    this.findProfile()
  }

} 
