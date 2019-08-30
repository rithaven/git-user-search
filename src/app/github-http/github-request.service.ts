
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})

export class Githubservice {

  private userName = 'rithaven';
  private clientId = 'rithaven';
  private clientSecret = 'e52f2d44d1a5846fb00ee9707afdc60ac9f00999';

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
