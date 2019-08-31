import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from 'src/environments/environment.prod';



@Injectable({
  providedIn: 'root'
})

export class Githubservice {

  private userName = 'rithaven';

  private clientSecret = '45305f4a6a3da4c43c2c652c7dc6278433ed4ee8';
  constructor(private _http: Http) {

  }
  gitUser() {
        return this._http.get('https://api.github.com/users/' + this.userName + '?access_token=' + this.clientSecret)
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


