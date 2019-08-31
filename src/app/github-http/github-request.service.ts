
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})

export class Githubservice {

  private userName = 'nnn';
  private clientId = 'rnnnnn';
  private clientSecret = '5fa414b89dede5dfabc60abb9931c50d6409f5c0';

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
