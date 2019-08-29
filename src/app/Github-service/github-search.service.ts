import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})

export class Githubservice {

  private userName = 'rithaven';
  private clientId = '52707943';
  private clientSecret = '5d5f806086058d37f9c47f01fbd73118833a8c6f';

  constructor(private _http: Http) {

  }
  gitUser() {
        return this._http.get('http://api.github.com/users/' + this.userName + '?client_id='
         + this.clientId + '&client_secret=' + this.clientSecret)
      .map(res => res.json());
  }
  gitRepos() {
  return this._http.get('http://api.github.com/users/' + this.userName + '/repos?client_id='
         + this.clientId + '&client_secret=' + this.clientSecret)
      .map(res => res.json());
    }
  updateUser(userName: string) {
    this.userName = userName;
  }
}


