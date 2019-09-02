
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class Githubservice {

  private userName = 'hhhh';
  private clientId = 'hhhh';
  private clientSecret = 'bb4dc813751930bba4a9830e2a3f49d19abc08c2';

  constructor(private _http: Http) {

  }
  gitUser() {
        return this._http.get('https://api.github.com/users/' + this.userName + '?access_token='
         + this.clientId + '&client_secret=' + this.clientSecret)
      .map(res => res.json());
  }
  gitRepos() {
  return this._http.get('https://api.github.com/users/' + this.userName + '/repos?access_token=' + this.clientSecret)
      .map(res => res.json());
    }
  updateUser(userName: string) {
    this.userName = userName;
  }
}
