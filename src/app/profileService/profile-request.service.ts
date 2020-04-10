import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {
  
  username: string;
  repoName: string;
  clientId: string = "9a67142bcc620287a7cf";
  clientSecret: string = "90b504378b551c01458c58629dbe9a041d02c8f1";
  apikey:string='1f5a880c32fa24201d1718a05a9edf1fadf0270b';

  constructor(private http: HttpClient) { 
    console.log('service is now ready');
    
  }
   
  getProfileInfor(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  
  }
  getProfileRepos(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  searchrepos() {
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apikey}`})
    }))
  }
  updateProfile(username:string){
    this.username =username
  }
  UpdateRepo(repo:string) {
    this.repoName = repo;
  }

}