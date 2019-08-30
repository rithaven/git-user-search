
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})

export class Githubservice {

  private userName = 'rithaven';
  private clientId = 'rithaven';
  private clientSecret = '2fa8adc71c27171a596733b3842e734fd097957b';

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
