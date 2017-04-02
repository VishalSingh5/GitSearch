import { Injectable } from '@angular/core';
import{ Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {

private username :string;
private client_id='a4b24ea0ab8948071690';
private client_secret='6894da3087268d1bd691e72f6bce7f1a2395f6cc';

  constructor(private _http:Http) {
    console.log("Github Service Ready");
    this.username= 'VishalSingh5';
  }
  getUser(){
      return this._http.get('http://api.github.com/users/' + this.username +'?client_id=' +this.client_id+ '&client_secret=' +this.client_secret)
      .map(res => res.json());
  }
  getRepos(){
      return this._http.get('http://api.github.com/users/' + this.username +'/repos?client_id=' +this.client_id+ '&client_secret=' +this.client_secret)
      .map(res => res.json());
}
UpdateUser(username:string){
     this.username= username;
}
}
